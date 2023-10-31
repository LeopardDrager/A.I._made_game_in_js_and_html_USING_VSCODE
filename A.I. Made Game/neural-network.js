"use strict";

/**************** 
 Matrix Functions
****************/

class Matrix {
  constructor(rows, cols, data = []) { // Corrected opening and closing brackets
    this._rows = rows;
    this._cols = cols;
    this._data = data;

    // initialise with zeros if no data provided
    if (data == null || data.length == 0) {
      this._data = [];
      for (let i = 0; i < this._rows; i++) {
        this._data[i] = [];
        for (let j = 0; j < this._cols; j++) {
          this._data[i][j] = 0;
        }
      }
    } else {
      //check data integrity
      if (data.length != this._rows || data[0].length != cols) { // Corrected parentheses
        throw new Error("Incorrect data dimensions!"); // Corrected error message format
      }
    }
  }

  get rows() {
    return this._rows;
  }
  get cols() {
    return this._cols;
  }
  get data() {
    return this._data;
  }
 
  //add two matrices
  static add(m0, m1) {
    Matrix.checkDimensions(m0,m1);
    let m= new Matrix(m0.rows, m0.cols);
    for(let i = 0; i < m.rows; i++){
      for (let j = 0; j < m.cols; j++){
      m.data[i][j] = m0.data[i][j] + m1.data[i][j];
      }
    }
    return m;
  }
  
  //check matrices have the same dimension
  static checkDimensions(m0, m1){
    if (m0.rows != m1.rows|| m0.cols != m1.cols){
      throw new Error("Matrices are of different dimensions!");
    }
  
  }

  //dot product of two matrices
  static dot(m0, m1) {
      if(m0.cols != m1.rows){
        throw new Error("Matricies are not \"dot\" compatible");
      }
      let m = new Matrix(m0.rows, m1.cols);
      for(let i = 0; i < m.rows; i++) {
        for (let j = 0; j < m.cols; j++) {
            let sum = 0;
            for (let k = 0; k < m0.cols; k++) {
              sum += m0.data[i][k] * m1.data[k][j];
            }
            m.data[i][j] = sum;
        }
      }
      return m;
  }

   //mutiply two matrices (not the dot product)
   static multiply(m0, m1) {
    Matrix.checkDimensions(m0,m1);
    let m= new Matrix(m0.rows, m0.cols);
    for(let i = 0; i < m.rows; i++){
      for (let j = 0; j < m.cols; j++){
      m.data[i][j] = m0.data[i][j] * m1.data[i][j];
      }
    }
    return m;
  }

  //subtract two matrices
  static subtract(m0, m1) {
    Matrix.checkDimensions(m0,m1);
    let m= new Matrix(m0.rows, m0.cols);
    for(let i = 0; i < m.rows; i++){
      for (let j = 0; j < m.cols; j++){
      m.data[i][j] = m0.data[i][j] - m1.data[i][j];
      }
    }
    return m;
  }

  // apply random weights between -1 and 1 
  randomWeights(){
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = Math.random() * 2 - 1;
      }   
    }
  }
}
