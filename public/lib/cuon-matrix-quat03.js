// cuon-matrix.js (c) 2012 kanda and matsuda
/** 
 * This is a class treating 4x4 matrix from the book 
 *	'WebGL Programming Guide' (2013),
 * MODIFIED 2/2014,8 by Jack Tumblin and students in Northwestern Univ EECS 351-1
 * "Intro to Computer Grapics'.
 * --added 'pushMatrix()' and 'popMatrix()' member fcns to provide a push-down/
 *    pop-up stack for any Matrix4 object, useful for traversing scene graphs.
 * --added Quaternion class (at end; modified from early THREE.js library)
 * --added 'printMe' member functions to print vector, matrix, and quaternions
 *	     in JavaScript console using 'console.log()' function
 *
 * --This library's 'setXXX()' functions replace current matrix contents;
 *  (e.g. setIdentity(), setRotate(), etc) and its 'concat()' and 'XXX()' fcns
 *  (e.g. rotate(), translate(), scale() etc) multiply current matrix contents 
 * with a with the function's newly-created matrix, e.g.:
 *  					[M_new] = [M_old][M_rotate] 
 * and returns matrix M_new.
 */

/**
 * Constructor of Matrix4
 * If opt_src is specified, new matrix is initialized by opt_src.
 * Otherwise, new matrix is initialized by identity matrix.
 * @param opt_src source matrix(option)
 */
var Matrix4 = function(opt_src) {
  var i, s, d;
  if (opt_src && typeof opt_src === 'object' && opt_src.hasOwnProperty('elements')) {
    s = opt_src.elements;
    d = new Float32Array(16);
    for (i = 0; i < 16; ++i) {
      d[i] = s[i];
    }
    this.elements = d;
  } else {
    this.elements = new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]);
  }
};
 
/**
 * Set the identity matrix.
 * @return this
 */
Matrix4.prototype.setIdentity = function() {
  var e = this.elements;
  e[0] = 1;   e[4] = 0;   e[8]  = 0;   e[12] = 0;
  e[1] = 0;   e[5] = 1;   e[9]  = 0;   e[13] = 0;
  e[2] = 0;   e[6] = 0;   e[10] = 1;   e[14] = 0;
  e[3] = 0;   e[7] = 0;   e[11] = 0;   e[15] = 1;
  return this;
};

/**
 * Copy matrix.
 * @param src source matrix
 * @return this
 */
Matrix4.prototype.set = function(src) {
  var i, s, d;

  s = src.elements;
  d = this.elements;

  if (s === d) {		// do nothing if given 'this' as arg.
    return;
  }
    
  for (i = 0; i < 16; ++i) {	
    d[i] = s[i];
  }
  return this;
};

/**
 * Multiply the matrix from the right.
 * @param other The multiply matrix
 * @return this
 */
Matrix4.prototype.concat = function(other) {
  var i, e, a, b, ai0, ai1, ai2, ai3;
  
  // Calculate e = a * b
  e = this.elements;
  a = this.elements;
  b = other.elements;
  
  // If e equals b, copy b to temporary matrix.
  if (e === b) {
    b = new Float32Array(16);
    for (i = 0; i < 16; ++i) {
      b[i] = e[i];
    }
  }
  
  for (i = 0; i < 4; i++) {
    ai0=a[i];  ai1=a[i+4];  ai2=a[i+8];  ai3=a[i+12];
    e[i]    = ai0 * b[0]  + ai1 * b[1]  + ai2 * b[2]  + ai3 * b[3];
    e[i+4]  = ai0 * b[4]  + ai1 * b[5]  + ai2 * b[6]  + ai3 * b[7];
    e[i+8]  = ai0 * b[8]  + ai1 * b[9]  + ai2 * b[10] + ai3 * b[11];
    e[i+12] = ai0 * b[12] + ai1 * b[13] + ai2 * b[14] + ai3 * b[15];
  }
  
  return this;
};

Matrix4.prototype.multiply = Matrix4.prototype.concat;

/**
 * Multiply the three-dimensional vector (presumes w==1)
 * @param pos  The multiply vector
 * @return The result of multiplication(Float32Array)
 */
Matrix4.prototype.multiplyVector3 = function(pos) {
  var e = this.elements;
  var p = pos.elements;
  var v = new Vector3();
  var result = v.elements;

  result[0] = p[0] * e[0] + p[1] * e[4] + p[2] * e[ 8] + e[11]; // note the added 4th column
  result[1] = p[0] * e[1] + p[1] * e[5] + p[2] * e[ 9] + e[12]; // (presumes hidden 4th vector element w==1)
  result[2] = p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + e[13];

  return v;
};

/**
 * Multiply the four-dimensional vector.
 * @param pos  The multiply vector
 * @return The result of multiplication(Float32Array)
 */
Matrix4.prototype.multiplyVector4 = function(pos) {
  var e = this.elements;
  var p = pos.elements;
  var v = new Vector4();
  var result = v.elements;

  result[0] = p[0] * e[0] + p[1] * e[4] + p[2] * e[ 8] + p[3] * e[12];
  result[1] = p[0] * e[1] + p[1] * e[5] + p[2] * e[ 9] + p[3] * e[13];
  result[2] = p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + p[3] * e[14];
  result[3] = p[0] * e[3] + p[1] * e[7] + p[2] * e[11] + p[3] * e[15];

  return v;
};

/**
 * Transpose the matrix.
 * @return this
 */
Matrix4.prototype.transpose = function() {
  var e, t;

  e = this.elements;

  t = e[ 1];  e[ 1] = e[ 4];  e[ 4] = t;
  t = e[ 2];  e[ 2] = e[ 8];  e[ 8] = t;
  t = e[ 3];  e[ 3] = e[12];  e[12] = t;
  t = e[ 6];  e[ 6] = e[ 9];  e[ 9] = t;
  t = e[ 7];  e[ 7] = e[13];  e[13] = t;
  t = e[11];  e[11] = e[14];  e[14] = t;

  return this;
};

/**
 * Calculate the inverse matrix of specified matrix, and set to this.
 * @param other The source matrix
 * @return this
 */
Matrix4.prototype.setInverseOf = function(other) {
  var i, s, d, inv, det;

  s = other.elements;
  d = this.elements;
  inv = new Float32Array(16);

  inv[0]  =   s[5]*s[10]*s[15] - s[5] *s[11]*s[14] - s[9] *s[6]*s[15]
            + s[9]*s[7] *s[14] + s[13]*s[6] *s[11] - s[13]*s[7]*s[10];
  inv[4]  = - s[4]*s[10]*s[15] + s[4] *s[11]*s[14] + s[8] *s[6]*s[15]
            - s[8]*s[7] *s[14] - s[12]*s[6] *s[11] + s[12]*s[7]*s[10];
  inv[8]  =   s[4]*s[9] *s[15] - s[4] *s[11]*s[13] - s[8] *s[5]*s[15]
            + s[8]*s[7] *s[13] + s[12]*s[5] *s[11] - s[12]*s[7]*s[9];
  inv[12] = - s[4]*s[9] *s[14] + s[4] *s[10]*s[13] + s[8] *s[5]*s[14]
            - s[8]*s[6] *s[13] - s[12]*s[5] *s[10] + s[12]*s[6]*s[9];

  inv[1]  = - s[1]*s[10]*s[15] + s[1] *s[11]*s[14] + s[9] *s[2]*s[15]
            - s[9]*s[3] *s[14] - s[13]*s[2] *s[11] + s[13]*s[3]*s[10];
  inv[5]  =   s[0]*s[10]*s[15] - s[0] *s[11]*s[14] - s[8] *s[2]*s[15]
            + s[8]*s[3] *s[14] + s[12]*s[2] *s[11] - s[12]*s[3]*s[10];
  inv[9]  = - s[0]*s[9] *s[15] + s[0] *s[11]*s[13] + s[8] *s[1]*s[15]
            - s[8]*s[3] *s[13] - s[12]*s[1] *s[11] + s[12]*s[3]*s[9];
  inv[13] =   s[0]*s[9] *s[14] - s[0] *s[10]*s[13] - s[8] *s[1]*s[14]
            + s[8]*s[2] *s[13] + s[12]*s[1] *s[10] - s[12]*s[2]*s[9];

  inv[2]  =   s[1]*s[6]*s[15] - s[1] *s[7]*s[14] - s[5] *s[2]*s[15]
            + s[5]*s[3]*s[14] + s[13]*s[2]*s[7]  - s[13]*s[3]*s[6];
  inv[6]  = - s[0]*s[6]*s[15] + s[0] *s[7]*s[14] + s[4] *s[2]*s[15]
            - s[4]*s[3]*s[14] - s[12]*s[2]*s[7]  + s[12]*s[3]*s[6];
  inv[10] =   s[0]*s[5]*s[15] - s[0] *s[7]*s[13] - s[4] *s[1]*s[15]
            + s[4]*s[3]*s[13] + s[12]*s[1]*s[7]  - s[12]*s[3]*s[5];
  inv[14] = - s[0]*s[5]*s[14] + s[0] *s[6]*s[13] + s[4] *s[1]*s[14]
            - s[4]*s[2]*s[13] - s[12]*s[1]*s[6]  + s[12]*s[2]*s[5];

  inv[3]  = - s[1]*s[6]*s[11] + s[1]*s[7]*s[10] + s[5]*s[2]*s[11]
            - s[5]*s[3]*s[10] - s[9]*s[2]*s[7]  + s[9]*s[3]*s[6];
  inv[7]  =   s[0]*s[6]*s[11] - s[0]*s[7]*s[10] - s[4]*s[2]*s[11]
            + s[4]*s[3]*s[10] + s[8]*s[2]*s[7]  - s[8]*s[3]*s[6];
  inv[11] = - s[0]*s[5]*s[11] + s[0]*s[7]*s[9]  + s[4]*s[1]*s[11]
            - s[4]*s[3]*s[9]  - s[8]*s[1]*s[7]  + s[8]*s[3]*s[5];
  inv[15] =   s[0]*s[5]*s[10] - s[0]*s[6]*s[9]  - s[4]*s[1]*s[10]
            + s[4]*s[2]*s[9]  + s[8]*s[1]*s[6]  - s[8]*s[2]*s[5];

  det = s[0]*inv[0] + s[1]*inv[4] + s[2]*inv[8] + s[3]*inv[12];
  if (det === 0) {
    return this;
  }

  det = 1 / det;
  for (i = 0; i < 16; i++) {
    d[i] = inv[i] * det;
  }

  return this;
};

/**
 * Calculate the inverse matrix of this, and set to this.
 * @return this
 */
Matrix4.prototype.invert = function() {
  return this.setInverseOf(this);
};

/**
 * Set the orthographic projection matrix.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @return this
 */
Matrix4.prototype.setOrtho = function(left, right, bottom, top, near, far) {
  var e, rw, rh, rd;

  if (left === right || bottom === top || near === far) {
    throw 'null frustum';
  }

  rw = 1 / (right - left);
  rh = 1 / (top - bottom);
  rd = 1 / (far - near);

  e = this.elements;

  e[0]  = 2 * rw;
  e[1]  = 0;
  e[2]  = 0;
  e[3]  = 0;

  e[4]  = 0;
  e[5]  = 2 * rh;
  e[6]  = 0;
  e[7]  = 0;

  e[8]  = 0;
  e[9]  = 0;
  e[10] = -2 * rd;
  e[11] = 0;

  e[12] = -(right + left) * rw;
  e[13] = -(top + bottom) * rh;
  e[14] = -(far + near) * rd;
  e[15] = 1;

  return this;
};

/**
 * Multiply the orthographic projection matrix from the right.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @return this
 */
Matrix4.prototype.ortho = function(left, right, bottom, top, near, far) {
  return this.concat(new Matrix4().setOrtho(left, right, bottom, top, near, far));
};

/**
 * Set the perspective projection matrix.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */
Matrix4.prototype.setFrustum = function(left, right, bottom, top, near, far) {
  var e, rw, rh, rd;

  if (left === right || top === bottom || near === far) {
    throw 'null frustum';
  }
  if (near <= 0) {
    throw 'near <= 0';
  }
  if (far <= 0) {
    throw 'far <= 0';
  }

  rw = 1 / (right - left);
  rh = 1 / (top - bottom);
  rd = 1 / (far - near);

  e = this.elements;

  e[ 0] = 2 * near * rw;
  e[ 1] = 0;
  e[ 2] = 0;
  e[ 3] = 0;

  e[ 4] = 0;
  e[ 5] = 2 * near * rh;
  e[ 6] = 0;
  e[ 7] = 0;

  e[ 8] = (right + left) * rw;
  e[ 9] = (top + bottom) * rh;
  e[10] = -(far + near) * rd;
  e[11] = -1;

  e[12] = 0;
  e[13] = 0;
  e[14] = -2 * near * far * rd;
  e[15] = 0;

  return this;
};

/**
 * Multiply the perspective projection matrix from the right.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */
Matrix4.prototype.frustum = function(left, right, bottom, top, near, far) {
  return this.concat(new Matrix4().setFrustum(left, right, bottom, top, near, far));
};

/**
 * Set the perspective projection matrix by fovy and aspect.
 * @param fovy The angle in degrees between the upper and lower sides of the frustum.
 * @param aspect The aspect ratio of the frustum. (width/height)
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */
Matrix4.prototype.setPerspective = function(fovy, aspect, near, far) {
  var e, rd, s, ct;

  if (near === far || aspect === 0) {
    throw 'null frustum';
  }
  if (near <= 0) {
    throw 'near <= 0';
  }
  if (far <= 0) {fovy
    throw 'far <= 0';
  }

  fovy = Math.PI * fovy / 180 / 2;
  s = Math.sin(fovy);
  if (s === 0) {
    throw 'null frustum';
  }

  rd = 1 / (far - near);
  ct = Math.cos(fovy) / s;

  e = this.elements;

  e[0]  = ct / aspect;
  e[1]  = 0;
  e[2]  = 0;
  e[3]  = 0;

  e[4]  = 0;
  e[5]  = ct;
  e[6]  = 0;
  e[7]  = 0;

  e[8]  = 0;
  e[9]  = 0;
  e[10] = -(far + near) * rd;
  e[11] = -1;

  e[12] = 0;
  e[13] = 0;
  e[14] = -2 * near * far * rd;
  e[15] = 0;

  return this;
};

/**
 * Multiply the perspective projection matrix from the right.
 * @param fovy The angle in degrees between the upper and lower sides of the frustum.
 * @param aspect The aspect ratio of the frustum. (width/height)
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */
Matrix4.prototype.perspective = function(fovy, aspect, near, far) {
  return this.concat(new Matrix4().setPerspective(fovy, aspect, near, far));
};

/**
 * Set the matrix for scaling.
 * @param x The scale factor along the X axis
 * @param y The scale factor along the Y axis
 * @param z The scale factor along the Z axis
 * @return this
 */
Matrix4.prototype.setScale = function(x, y, z) {
  var e = this.elements;
  e[0] = x;  e[4] = 0;  e[8]  = 0;  e[12] = 0;
  e[1] = 0;  e[5] = y;  e[9]  = 0;  e[13] = 0;
  e[2] = 0;  e[6] = 0;  e[10] = z;  e[14] = 0;
  e[3] = 0;  e[7] = 0;  e[11] = 0;  e[15] = 1;
  return this;
};

/**
 * Multiply the matrix for scaling from the right.
 * @param x The scale factor along the X axis
 * @param y The scale factor along the Y axis
 * @param z The scale factor along the Z axis
 * @return this
 */
Matrix4.prototype.scale = function(x, y, z) {
  var e = this.elements;
  e[0] *= x;  e[4] *= y;  e[8]  *= z;
  e[1] *= x;  e[5] *= y;  e[9]  *= z;
  e[2] *= x;  e[6] *= y;  e[10] *= z;
  e[3] *= x;  e[7] *= y;  e[11] *= z;
  return this;
};

/**
 * Set the matrix for translation.
 * @param x The X value of a translation.
 * @param y The Y value of a translation.
 * @param z The Z value of a translation.
 * @return this
 */
Matrix4.prototype.setTranslate = function(x, y, z) {
  var e = this.elements;
  e[0] = 1;  e[4] = 0;  e[8]  = 0;  e[12] = x;
  e[1] = 0;  e[5] = 1;  e[9]  = 0;  e[13] = y;
  e[2] = 0;  e[6] = 0;  e[10] = 1;  e[14] = z;
  e[3] = 0;  e[7] = 0;  e[11] = 0;  e[15] = 1;
  return this;
};

/**
 * Multiply the matrix for translation from the right.
 * @param x The X value of a translation.
 * @param y The Y value of a translation.
 * @param z The Z value of a translation.
 * @return this
 */
Matrix4.prototype.translate = function(x, y, z) {
  var e = this.elements;
  e[12] += e[0] * x + e[4] * y + e[8]  * z;
  e[13] += e[1] * x + e[5] * y + e[9]  * z;
  e[14] += e[2] * x + e[6] * y + e[10] * z;
  e[15] += e[3] * x + e[7] * y + e[11] * z;
  return this;
};

/**
 * Set the matrix for rotation.
 * The vector of rotation axis may not be normalized.
 * @param angle The angle of rotation (degrees)
 * @param x The X coordinate of vector of rotation axis.
 * @param y The Y coordinate of vector of rotation axis.
 * @param z The Z coordinate of vector of rotation axis.
 * @return this
 */
Matrix4.prototype.setRotate = function(angle, x, y, z) {
  var e, s, c, len, rlen, nc, xy, yz, zx, xs, ys, zs;

  angle = Math.PI * angle / 180;
  e = this.elements;

  s = Math.sin(angle);
  c = Math.cos(angle);

  if (0 !== x && 0 === y && 0 === z) {
    // Rotation around X axis
    if (x < 0) {
      s = -s;
    }
    e[0] = 1;  e[4] = 0;  e[ 8] = 0;  e[12] = 0;
    e[1] = 0;  e[5] = c;  e[ 9] =-s;  e[13] = 0;
    e[2] = 0;  e[6] = s;  e[10] = c;  e[14] = 0;
    e[3] = 0;  e[7] = 0;  e[11] = 0;  e[15] = 1;
  } else if (0 === x && 0 !== y && 0 === z) {
    // Rotation around Y axis
    if (y < 0) {
      s = -s;
    }
    e[0] = c;  e[4] = 0;  e[ 8] = s;  e[12] = 0;
    e[1] = 0;  e[5] = 1;  e[ 9] = 0;  e[13] = 0;
    e[2] =-s;  e[6] = 0;  e[10] = c;  e[14] = 0;
    e[3] = 0;  e[7] = 0;  e[11] = 0;  e[15] = 1;
  } else if (0 === x && 0 === y && 0 !== z) {
    // Rotation around Z axis
    if (z < 0) {
      s = -s;
    }
    e[0] = c;  e[4] =-s;  e[ 8] = 0;  e[12] = 0;
    e[1] = s;  e[5] = c;  e[ 9] = 0;  e[13] = 0;
    e[2] = 0;  e[6] = 0;  e[10] = 1;  e[14] = 0;
    e[3] = 0;  e[7] = 0;  e[11] = 0;  e[15] = 1;
  } else {
    // Rotation around another axis
    len = Math.sqrt(x*x + y*y + z*z);
    if (len !== 1) {
      rlen = 1 / len;
      x *= rlen;
      y *= rlen;
      z *= rlen;
    }
    nc = 1 - c;
    xy = x * y;
    yz = y * z;
    zx = z * x;
    xs = x * s;
    ys = y * s;
    zs = z * s;

    e[ 0] = x*x*nc +  c;
    e[ 1] = xy *nc + zs;
    e[ 2] = zx *nc - ys;
    e[ 3] = 0;

    e[ 4] = xy *nc - zs;
    e[ 5] = y*y*nc +  c;
    e[ 6] = yz *nc + xs;
    e[ 7] = 0;

    e[ 8] = zx *nc + ys;
    e[ 9] = yz *nc - xs;
    e[10] = z*z*nc +  c;
    e[11] = 0;

    e[12] = 0;
    e[13] = 0;
    e[14] = 0;
    e[15] = 1;
  }

  return this;
};
/**
 * Multiply the matrix for rotation from the right.
 * The vector of rotation axis may not be normalized.
 * @param angle The angle of rotation (degrees)
 * @param x The X coordinate of vector of rotation axis.
 * @param y The Y coordinate of vector of rotation axis.
 * @param z The Z coordinate of vector of rotation axis.
 * @return this
 */
Matrix4.prototype.rotate = function(angle, x, y, z) {
  return this.concat(new Matrix4().setRotate(angle, x, y, z));
};

/**
 * Set the viewing matrix.
 * @param eyeX, eyeY, eyeZ The position of the eye point.
 * @param centerX, centerY, centerZ The position of the reference point.
 * @param upX, upY, upZ The direction of the up vector.
 * @return this
 */
Matrix4.prototype.setLookAt = function(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
  var e, fx, fy, fz, rlf, sx, sy, sz, rls, ux, uy, uz;

  fx = centerX - eyeX;
  fy = centerY - eyeY;
  fz = centerZ - eyeZ;

  // Normalize f.
  rlf = 1 / Math.sqrt(fx*fx + fy*fy + fz*fz);
  fx *= rlf;
  fy *= rlf;
  fz *= rlf;

  // Calculate cross product of f and up.
  sx = fy * upZ - fz * upY;
  sy = fz * upX - fx * upZ;
  sz = fx * upY - fy * upX;

  // Normalize s.
  rls = 1 / Math.sqrt(sx*sx + sy*sy + sz*sz);
  sx *= rls;
  sy *= rls;
  sz *= rls;

  // Calculate cross product of s and f.
  ux = sy * fz - sz * fy;
  uy = sz * fx - sx * fz;
  uz = sx * fy - sy * fx;

  // Set to this.
  e = this.elements;
  e[0] = sx;
  e[1] = ux;
  e[2] = -fx;
  e[3] = 0;

  e[4] = sy;
  e[5] = uy;
  e[6] = -fy;
  e[7] = 0;

  e[8] = sz;
  e[9] = uz;
  e[10] = -fz;
  e[11] = 0;

  e[12] = 0;
  e[13] = 0;
  e[14] = 0;
  e[15] = 1;

  // Translate.
  return this.translate(-eyeX, -eyeY, -eyeZ);
};

/**
 * Multiply the viewing matrix from the right.
 * @param eyeX, eyeY, eyeZ The position of the eye point.
 * @param centerX, centerY, centerZ The position of the reference point.
 * @param upX, upY, upZ The direction of the up vector.
 * @return this
 */
Matrix4.prototype.lookAt = function(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
  return this.concat(new Matrix4().setLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ));
};

/**
 * Multiply the matrix for project vertex to plane from the right.
 * @param plane The array[A, B, C, D] of the equation of plane "Ax + By + Cz + D = 0".
 * @param light The array which stored coordinates of the light. if light[3]=0, treated as parallel light.
 * @return this
 */
Matrix4.prototype.dropShadow = function(plane, light) {
  var mat = new Matrix4();
  var e = mat.elements;

  var dot = plane[0] * light[0] + plane[1] * light[1] + plane[2] * light[2] + plane[3] * light[3];

  e[ 0] = dot - light[0] * plane[0];
  e[ 1] =     - light[1] * plane[0];
  e[ 2] =     - light[2] * plane[0];
  e[ 3] =     - light[3] * plane[0];

  e[ 4] =     - light[0] * plane[1];
  e[ 5] = dot - light[1] * plane[1];
  e[ 6] =     - light[2] * plane[1];
  e[ 7] =     - light[3] * plane[1];

  e[ 8] =     - light[0] * plane[2];
  e[ 9] =     - light[1] * plane[2];
  e[10] = dot - light[2] * plane[2];
  e[11] =     - light[3] * plane[2];

  e[12] =     - light[0] * plane[3];
  e[13] =     - light[1] * plane[3];
  e[14] =     - light[2] * plane[3];
  e[15] = dot - light[3] * plane[3];

  return this.concat(mat);
}

/**
 * Multiply the matrix for project vertex to plane from the right.(Projected by parallel light.)
 * @param normX, normY, normZ The normal vector of the plane.(Not necessary to be normalized.)
 * @param planeX, planeY, planeZ The coordinate of arbitrary points on a plane.
 * @param lightX, lightY, lightZ The vector of the direction of light.(Not necessary to be normalized.)
 * @return this
 */
Matrix4.prototype.dropShadowDirectionally = function(normX, normY, normZ, planeX, planeY, planeZ, lightX, lightY, lightZ) {
  var a = planeX * normX + planeY * normY + planeZ * normZ;
  return this.dropShadow([normX, normY, normZ, -a], [lightX, lightY, lightZ, 0]);
};

/**
 *	Create rotation matrix from a given !UNIT-LENGTH! quaternion.
 * CAUTION!  forms WEIRD matrices from quaternions of other lengths!
 * @param qw the quaternion's 'real' coordinate
 * @param qx the quaternion's imaginary-i coord.
 * @param qy  "			"			"		imaginary-j coord.
 * @param qz  "			"			"		imaginary-k coord.
 *   -- Jack Tumblin 2/2014: from 'Math for 3D Game Programmng and CG"
 *													by Jed Lengyel, 34r Ed., pg. 91.
 */
Matrix4.prototype.setFromQuat = function(qx, qy, qz, qw) {
  var e = this.elements;
  e[0]=1 -2*qy*qy -2*qz*qz; e[4]=   2*qx*qy -2*qw*qz; e[8] =   2*qx*qz +2*qw*qy; 
  																																		e[12] = 0;
  e[1]=   2*qx*qy +2*qw*qz; e[5]=1 -2*qx*qx -2*qz*qz; e[9] =   2*qy*qz -2*qw*qx;
  																																		e[13] = 0;
  e[2]=   2*qx*qz -2*qw*qy; e[6]=   2*qy*qz +2*qw*qx; e[10]=1 -2*qx*qx -2*qy*qy;
  																																		e[14] = 0;
  e[3]= 0;  								e[7]= 0;  								e[11] = 0;  		e[15] = 1;
	return this;
}

/**
 * print matrix contents in console window:
 *			(J. Tumblin 2014.02.15; updated 2018.02.01)
 */
 Matrix4.prototype.printMe = function(opt_src) {
 var res = 5;
 var e = this.elements;   // why do this? just to make code more readable...
  if(opt_src && typeof opt_src === 'string') {  // called w/ string argument?
  // YES! use that string as our label:
   console.log('-------------------', opt_src, '-------------------------');
   console.log(	e[ 0].toFixed(res),'\t',e[ 4].toFixed(res),'\t', 
   							e[ 8].toFixed(res),'\t',e[12].toFixed(res));
   console.log(	e[ 1].toFixed(res),'\t',e[ 5].toFixed(res),'\t', 
   							e[ 9].toFixed(res),'\t',e[13].toFixed(res));
   console.log(	e[ 2].toFixed(res),'\t',e[ 6].toFixed(res),'\t', 
   							e[10].toFixed(res),'\t',e[14].toFixed(res));
   console.log(	e[ 3].toFixed(res),'\t',e[ 7].toFixed(res),'\t', 
   							e[11].toFixed(res),'\t',e[15].toFixed(res));
   console.log('-------------------', opt_src, '(end)--------------------\n');
  }
  else {   // No. use default labels:
   console.log('----------------------4x4 Matrix----------------------------');
   console.log(	e[ 0].toFixed(res),'\t',e[ 4].toFixed(res),'\t', 
   							e[ 8].toFixed(res),'\t',e[12].toFixed(res));
   console.log(	e[ 1].toFixed(res),'\t',e[ 5].toFixed(res),'\t', 
   							e[ 9].toFixed(res),'\t',e[13].toFixed(res));
   console.log(	e[ 2].toFixed(res),'\t',e[ 6].toFixed(res),'\t', 
   							e[10].toFixed(res),'\t',e[14].toFixed(res));
   console.log(	e[ 3].toFixed(res),'\t',e[ 7].toFixed(res),'\t', 
   							e[11].toFixed(res),'\t',e[15].toFixed(res));
   console.log('----------------------4x4 Matrix (end)----------------------\n');
  }
};
/**
 * Constructor of Vector3
 * If opt_src is specified, new vector is initialized by opt_src.
 * @param opt_src source vector(option)
 * JT: aVec = new Vector3(); // Makes zero-valued Vector3
 *     aVec = new Vector3([5,6,7]); // sets aVec to 5,6,7 -- don't forget []!!
 */
var Vector3 = function(opt_src) {
  var v = new Float32Array(3);
  if (opt_src && typeof opt_src === 'object') {
    v[0] = opt_src[0]; v[1] = opt_src[1]; v[2] = opt_src[2];
  } 
  this.elements = v;
}

/**
  * Normalize.
  * @return this
  */
Vector3.prototype.normalize = function() {
  var v = this.elements;
  // find the length of the vector:
  var c = v[0], d = v[1], e = v[2], g = Math.sqrt(c*c+d*d+e*e);
  if(g){              // if given vector had non-zero length,
    if(g == 1)        // AND that vector length is already 1.0,
        return this;  // DO NOTHING. Keep current vector contents.
   } else {           // ELSE we got an empty, undefined, or zero-length vector.
     v[0] = 0; v[1] = 0; v[2] = 0;  // set its elements to zero-length, and
     return this;     // return
   }
   // Nope; we have valid vector--adjust its length to 1.0.
   g = 1/g;
   v[0] = c*g; v[1] = d*g; v[2] = e*g;
   return this;
};

/** J. Tumblin 2018.02.13
  * Returns the (scalar) dot-product of the two Vector3 objects
  * As dot-products are commutative (order doesn't matter) then
  * either of these statements will result in the same 'myDot' result:
  *     myDot = aVec.dot(bVec);  // Dot product: a[0]*b[0] + a[1]*b[1] + a[2]*b[2] 
  *     myDot = bVec.dot(aVec);
  */   
Vector3.prototype.dot = function(opt_src) {
  var vA = this.elements; // short-hand for the calling object
  if(opt_src && typeof opt_src === 'object' && opt_src.hasOwnProperty('elements')) {
    var vB = opt_src.elements;  // short-hand for the Vector3 argument
    }
  else {
    console.log('ERROR! dot() function needs Vec3 argument! \n');
    return 0.0;
  }
  return vA[0]*vB[0] + vA[1]*vB[1] + vA[2]*vB[2];  // compute dot-product
};

/** J. Tumblin 2018.02.13
  * Returns Vector3 cross-product of current object and argument 
  * Careful! cross-products are NOT commutative! Ordering matters
  *     cVec = aVec.cross(bVec);  // finds aVec x bVec
  *     cVec = bVec.cross(aVec);   // finds bVec x aVec (== -aVec x bVec)
  */
Vector3.prototype.cross = function(opt_src) {
  var vA = this.elements;   // short-hand for the calling object
  var ans = new Vector3([0.0, 0.0, 0.0]);  // initialize to zero vector 
  var vC = ans.elements;    // get the Float32Array contents of 'ans'
  if(opt_src && typeof opt_src === 'object' && opt_src.hasOwnProperty('elements')) {
    var vB = opt_src.elements;  // short-hand for the Vector3 argument
    }
  else {
    console.log('ERROR! cross() function needs Vec3 argument! \n');
    return ans;
  }
  // compute cross-product
  vC[0] = vA[1]*vB[2] - vA[2]*vB[1];  // Cx = Ay*Bz - Az*By
  vC[1] = vA[2]*vB[0] - vA[0]*vB[2];  // Cy = Az*Bx - Ax*Bz
  vC[2] = vA[0]*vB[1] - vA[1]*vB[0];  // Cz = Ax*By - Ay*Bx
  return ans; 
};

/** J. Tumblin 2018.02.01
  * Print contents of Vector3 on console.
  * If you write:  
  *     var aVec3 = new Vector3([7,8,9]);
  *     aVec3.printMe();   // prints--  Vector3: 7.00  8.00  9.00
  *     aVec3.printMe('my aVec3');
  *                        // prints-- my aVec3: 7.00  8.00  9.00
  */
 Vector3.prototype.printMe = function(opt_src) {
 var res = 5;
  if (opt_src && typeof opt_src === 'string') {
     console.log(opt_src,':',
      this.elements[ 0].toFixed(res),'\t', 
      this.elements[ 1].toFixed(res),'\t', 
      this.elements[ 2].toFixed(res),'\n');
  } 
  else {
     console.log('Vector3:', 
      this.elements[ 0].toFixed(res),'\t',
      this.elements[ 1].toFixed(res),'\t', 
      this.elements[ 2].toFixed(res),'\n');
  }
};

/**
 * Constructor of Vector4
 * If opt_src is specified, new vector is initialized by opt_src.
 * @param opt_src source vector(option)
 */
var Vector4 = function(opt_src) {
  var v = new Float32Array(4);
  if (opt_src && typeof opt_src === 'object') {
    v[0] = opt_src[0]; v[1] = opt_src[1]; v[2] = opt_src[2]; v[3] = opt_src[3];
  } 
  this.elements = v;
}

/** J. Tumblin 2018.02.13
  * Returns the (scalar) dot-product of the two Vector4 objects
  * As dot-products are commutative (order doesn't matter) then
  * either of these statements will result in the same 'myDot' result:
  *     myDot = aVec.dot(bVec);  // = a[0]*b[0] + a[1]*b[1] + a[2]*b[2] + a[3]*b[3] 
  *     myDot = bVec.dot(aVec);
  */   
Vector4.prototype.dot = function(opt_src) {
  var vA = this.elements; // short-hand for the calling object

  if(opt_src && typeof opt_src === 'object' && opt_src.hasOwnProperty('elements')) {
    var vB = opt_src.elements;  // short-hand for the Vector3 argument
    }
  else {
    console.log('ERROR! dot() function needs Vec4 argument! \n');
    return 0.0;
  }
  if(vA[3]*vB[3] !== 0) {
    console.log('WARNING! Vector4.dot() given non-zero \'w\' values: NOT a geometric result!!'); 
    }
  return vA[0]*vB[0] + vA[1]*vB[1] + vA[2]*vB[2] + vA[3]*vB[3];  // compute dot-product
};

/** J. Tumblin 2018.02.13
  * Returns Vector3 cross-product of current object and argument 
  * Careful! cross-products are NOT commutative! Ordering matters
  *     cVec = aVec.cross(bVec);  // finds aVec x bVec
  *     cVec = bVec.cross(aVec);   // finds bVec x aVec (== -aVec x bVec)
  */
Vector4.prototype.cross = function(opt_src) {
  var vA = this.elements;   // short-hand for the calling object
  var ans = new Vector4([0.0, 0.0, 0.0, 0.0]); // initialize to zero vector
  var vC = ans.elements;    // get the Float32Array contents of 'ans'
  if(opt_src && typeof opt_src === 'object' && opt_src.hasOwnProperty('elements')) {
    var vB = opt_src.elements;  // short-hand for the Vector4 argument
    }
  else {
    console.log('ERROR! cross() function needs Vec4 argument! \n');
    return ans;
  }
  if(vA[3] !== 0 || vB[3] !== 0) {
    console.log('WARNING! cross() given non-zero \'w\' values: IGNORED!!!');
    }
  // compute cross-product
  vC[0] = vA[1]*vB[2] - vA[2]*vB[1];  // Cx = Ay*Bz - Az*By
  vC[1] = vA[2]*vB[0] - vA[0]*vB[2];  // Cy = Az*Bx - Ax*Bz
  vC[2] = vA[0]*vB[1] - vA[1]*vB[0];  // Cz = Ax*By - Ay*Bx
  vC[3] = 0.0;    // set w == 0 ALWAYS, because it's a vector result
  return ans; 
};

/** J. Tumblin 2018.02.01
  * Print contents of Vector4 on console.
  * If you write:  
  *     var bVec4 = new Vector4([7,8,9,1]);
  *     bVec4.printMe();   // prints--  Vector4: 7.00  8.00  9.00  1.00
  *     bVec4.printMe('bVec4--');
  *                        // prints--  bVec4--: 7.00  8.00  9.00  1.00
  */
Vector4.prototype.printMe = function(opt_src) {
 var res = 5;
  if (opt_src && typeof opt_src === 'string') { 
     console.log(opt_src,':',     // print the string argument given.
      this.elements[0].toFixed(res),'\t', 
      this.elements[1].toFixed(res),'\t', 
      this.elements[2].toFixed(res),'\t',
      this.elements[3].toFixed(res),'\n');
  } 
  else {                    // user called printMe() with NO args, so...
     console.log('Vector4:', 
      this.elements[0].toFixed(res),'\t',
      this.elements[1].toFixed(res),'\t', 
      this.elements[2].toFixed(res),'\t',
      this.elements[3].toFixed(res),'\n');
  }
};

/**
 * Additions by Adrien Katsuya Tateno
 * January 28, 2014
 *
 * pushMatrix(myMat)  
 * Puts contents of 'myMat' matrix on top of a push-down stack
 * @param myMat the matrix to store
 *
 * myMat = popMatrix()
 * Removes the top matrix from a push-down stack
 * @return the matrix found at the top of the stack
 */
 var __cuon_matrix_mod_stack = [];
function pushMatrix(mat) {
  __cuon_matrix_mod_stack.push(new Matrix4(mat));
}

function popMatrix() {
  return __cuon_matrix_mod_stack.pop();
}

/**====================QUATERNIONS===============================================
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/   <<== INSPIRING! visit site!
 * Written for the THREE.js library
 *
 * 2014.02.12 Modified by Jack Tumblin, Northwestern Univ.
 * 						for use in EECS 351-1 "Intro to Computer Graphics" class
 *						along with textbook "WebGL Programming Guide" (2013, Matsuda)
 *						but without the THREE.js graphics library.
 *	-- DROPPED original 'setFromEuler()' function because it doesn't follow the 
 * 			generally-accepted definition of Euler angles as described by Wikipedia.
 *				
 */

Quaternion = function( x, y, z, w ) {
//--------------------------------------
	this.set(
		x || 0,
		y || 0,
		z || 0,
		w !== undefined ? w : 1
	);

};

Quaternion.prototype = {
//--------------------------------------
	constructor: Quaternion,
	set: function ( x, y, z, w ) {
					this.x = x;
					this.y = y;
					this.z = z;
					this.w = w;
		return this;
	},

  clear: function ( ) {
//--------------------------------------
	this.x = 0.0;
	this.y = 0.0;
	this.z = 0.0;
	this.w = 1.0;
	},
	
	copy: function ( q ) {
//--------------------------------------
		this.x = q.x;
		this.y = q.y;
		this.z = q.z;
		this.w = q.w;
		return this;
	},
	
	printMe: function ( ) {
//---------------------------------------
// 2014.02:  J. Tumblin
	res = 5;		// # of digits to print on HTML 'console'
	console.log('Quaternion: x=', this.x.toFixed(res), 
										    'i\ty=', this.y.toFixed(res), 
												'j\tz=', this.z.toFixed(res), 
									 'k\t(real)w=', this.w.toFixed(res),'\n');
	},
	
	
	setFromAxisAngle: function ( ax, ay, az, angleDeg) {
//--------------------------------------
// Good tutorial on rotations; code inspiration at:
//http://www.euclideanspace.com/maths/geometry/rotation
//                          /conversions/angleToQuaternion/index.htm
// Be sure we have a normalized x,y,z 'axis' argument before we start:
		var mag2 = ax*ax + ay*ay + az*az;	// axis length^2
		if(mag2-1.0 > 0.0000001 || mag2-1.0 < -0.0000001) {
			var normer = 1.0/Math.sqrt(mag2);
			ax *= normer;
			ay *= normer;
			az *= normer;
		}

		var halfAngle = angleDeg * Math.PI / 360.0;	// (angleDeg/2) * (2*pi/360)
		var s = Math.sin( halfAngle );
		this.x = ax * s;
		this.y = ay * s;
		this.z = az * s;
		this.w = Math.cos( halfAngle );
		return this;
	},
	
	setFromEuler: function ( alphaDeg, betaDeg, gammaDeg ) {
//--------------------------------------
// (Original function used non-standard definitions).
// Euler angles: http://en.wikipedia.org/wiki/Euler_angles
// rotate your 'current drawing axes' in 3 steps:
// 1) rotate around z-axis by angle alpha 
//			(makes a new, 2nd set of x,y,z axes to use for
//			drawing vertices. From these, we take the next step:) 
// 2) rotate around x-axis by angle beta
//			(makes a new, 3rd set of x,y,z axes to use for
//			drawing vertices.  From these, we take the next step:)
// 3) rotate around z-axis (again!) by angle gamma.
//			(makes a final, 4th set of x,y,z axes to use for 
// 			drawing vertices.  These axes are our final result. 
//
// accepts rotations in DEGREES

		console.log('NOT WRITTEN YET.  WRITE YOUR OWN.'); 

		this.w = 1;
	  this.x = 0;
		this.y = 0;
		this.z = 0;
		return this;
	},

	setFromRotationMatrix: function ( m ) {
//--------------------------------------
// Adapted from: http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

		function copySign(a, b) {
			return b < 0 ? -Math.abs(a) : Math.abs(a);
		}
		var absQ = Math.pow(m.determinant(), 1.0 / 3.0);
		this.w = Math.sqrt( Math.max( 0, absQ + m.n11 + m.n22 + m.n33 ) ) / 2;
		this.x = Math.sqrt( Math.max( 0, absQ + m.n11 - m.n22 - m.n33 ) ) / 2;
		this.y = Math.sqrt( Math.max( 0, absQ - m.n11 + m.n22 - m.n33 ) ) / 2;
		this.z = Math.sqrt( Math.max( 0, absQ - m.n11 - m.n22 + m.n33 ) ) / 2;
		this.x = copySign( this.x, ( m.n32 - m.n23 ) );
		this.y = copySign( this.y, ( m.n13 - m.n31 ) );
		this.z = copySign( this.z, ( m.n21 - m.n12 ) );
		this.normalize();
		return this;
	},

	calculateW : function () {
//--------------------------------------
		this.w = - Math.sqrt( Math.abs( 
		             1.0 - this.x * this.x - this.y * this.y - this.z * this.z ) );
		return this;
	},

	inverse: function () {
//--------------------------------------
		this.x *= -1;
		this.y *= -1;
		this.z *= -1;
		return this;
	},

	length: function () {
//--------------------------------------\
		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );
	},

	normalize: function () {
//--------------------------------------
		var len = Math.sqrt(this.x * this.x + 
												this.y * this.y + 
												this.z * this.z + 
												this.w * this.w );
		if ( len === 0 ) {
			this.x = 0;
			this.y = 0;
			this.z = 0;
			this.w = 0;
		} 
		else {
			len = 1 / len;
			this.x = this.x * len;
			this.y = this.y * len;
			this.z = this.z * len;
			this.w = this.w * len;
		}
		return this;
	},

	multiplySelf: function ( quat2 ) {
//--------------------------------------
		var qax = this.x,  qay = this.y,  qaz = this.z,  qaw = this.w,
		    qbx = quat2.x, qby = quat2.y, qbz = quat2.z, qbw = quat2.w;

		this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
		return this;
	},

	multiply: function ( q1, q2 ) {
//--------------------------------------
// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm
		this.x =  q1.x * q2.w + q1.y * q2.z - q1.z * q2.y + q1.w * q2.x;
		this.y = -q1.x * q2.z + q1.y * q2.w + q1.z * q2.x + q1.w * q2.y;
		this.z =  q1.x * q2.y - q1.y * q2.x + q1.z * q2.w + q1.w * q2.z;
		this.w = -q1.x * q2.x - q1.y * q2.y - q1.z * q2.z + q1.w * q2.w;
		return this;

	},

	multiplyVector3: function ( vec, dest ) {
//--------------------------------------
		if( !dest ) { dest = vec; }
		var x    = vec.x,  y  = vec.y,  z  = vec.z,
			 qx   = this.x, qy = this.y, qz = this.z, qw = this.w;
			 
		// calculate quat * vec:
		var ix =  qw * x + qy * z - qz * y,
				iy =  qw * y + qz * x - qx * z,
				iz =  qw * z + qx * y - qy * x,
				iw = -qx * x - qy * y - qz * z;
		// calculate result * inverse quat:
		dest.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
		dest.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
		dest.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
		return dest;
	}
}

Quaternion.slerp = function ( qa, qb, qm, t ) {
//--------------------------------------
// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

	var cosHalfTheta = qa.w * qb.w + qa.x * qb.x + qa.y * qb.y + qa.z * qb.z;

	if (cosHalfTheta < 0) {
		qm.w = -qb.w; 
		qm.x = -qb.x; 
		qm.y = -qb.y; 
		qm.z = -qb.z;
		cosHalfTheta = -cosHalfTheta;
	} 
	else {	qm.copy(qb);	}

	if ( Math.abs( cosHalfTheta ) >= 1.0 ) {
		qm.w = qa.w; 
		qm.x = qa.x; 
		qm.y = qa.y; 
		qm.z = qa.z;
		return qm;
	}

	var halfTheta = Math.acos( cosHalfTheta ),
	sinHalfTheta = Math.sqrt( 1.0 - cosHalfTheta * cosHalfTheta );

	if ( Math.abs( sinHalfTheta ) < 0.0001 ) {
		qm.w = 0.5 * ( qa.w + qb.w );
		qm.x = 0.5 * ( qa.x + qb.x );
		qm.y = 0.5 * ( qa.y + qb.y );
		qm.z = 0.5 * ( qa.z + qb.z );
		return qm;
	}

	var ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
	ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

	qm.w = ( qa.w * ratioA + qm.w * ratioB );
	qm.x = ( qa.x * ratioA + qm.x * ratioB );
	qm.y = ( qa.y * ratioA + qm.y * ratioB );
	qm.z = ( qa.z * ratioA + qm.z * ratioB );
	return qm;
}