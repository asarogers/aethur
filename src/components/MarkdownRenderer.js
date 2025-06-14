import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import 'katex/dist/katex.min.css';

export default function MarkdownRenderer({ content }) {
  return (
    <div style={{ color: "#ddd", fontSize: "1rem", lineHeight: "1.6" }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          p: ({ node, ...props }) => (
            <p style={{ marginBottom: "1rem", color: "#ddd" }} {...props} />
          ),
          li: ({ node, ...props }) => (
            <li style={{ marginBottom: "0.5rem", color: "#ddd" }} {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem", color: "#ddd" }} {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol style={{ marginBottom: "1rem", paddingLeft: "1.5rem", color: "#ddd" }} {...props} />
          ),
          h1: ({ node, ...props }) => (
            <h1 style={{ color: "#FF861D", marginBottom: "1rem", fontSize: "2rem" }} {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 style={{ color: "#FF861D", marginBottom: "0.8rem", fontSize: "1.5rem" }} {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 style={{ color: "#FF861D", marginBottom: "0.6rem", fontSize: "1.25rem" }} {...props} />
          ),
          code: ({ node, inline, className, children, ...props }) => {
            // Don't style math code blocks
            if (className === 'language-math') {
              return <code className={className} {...props}>{children}</code>;
            }
            
            return (
              <code
                style={{
                  background: inline ? "#222" : "transparent",
                  color: "#FFFFFF",
                  padding: inline ? "2px 6px" : "0",
                  borderRadius: inline ? "4px" : "0",
                  fontSize: "0.95rem",
                  display: inline ? "inline" : "block",
                }}
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ node, ...props }) => (
            <pre
              style={{
                background: "#1a1a1a",
                padding: "1rem",
                borderRadius: "8px",
                overflow: "auto",
                marginBottom: "1rem",
                border: "1px solid #333",
              }}
              {...props}
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              style={{
                borderLeft: "4px solid #FF861D",
                paddingLeft: "1rem",
                margin: "1rem 0",
                fontStyle: "italic",
                color: "#bbb",
              }}
              {...props}
            />
          ),
          // Ensure math blocks have proper styling
          span: ({ node, className, ...props }) => {
            if (className?.includes('katex')) {
              return <span className={className} style={{ color: '#fff' }} {...props} />;
            }
            return <span {...props} />;
          },
          div: ({ node, className, ...props }) => {
            if (className?.includes('katex-display')) {
              return (
                <div
                  className={className}
                  style={{
                    textAlign: "center",
                    margin: "2rem 0",
                    padding: "1rem",
                    background: "#1a1a1a",
                    borderRadius: "8px",
                    border: "1px solid #333",
                    color: "#fff",
                  }}
                  {...props}
                />
              );
            }
            return <div className={className} {...props} />;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}