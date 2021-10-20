import firebase from "./Fire";

export const database = firebase.firestore();

export const storage = firebase.storage();
export const Product = firebase.database().ref().child("product");
export const Category = firebase.database().ref().child("category");
export const SubCategory = firebase.database().ref().child("subCategory");
