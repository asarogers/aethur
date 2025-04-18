import { useGoogleLogin } from "@react-oauth/google";

export const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const data = await res.json();
        console.log("User info:", data.email, data.given_name, data.family_name);

        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `${data.given_name} ${data.family_name}`,
            email: data.email,
          }),
        });

        
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });