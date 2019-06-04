import React, { Component } from 'react';

export const isAuthenticated = () => {
    if(localStorage.getItem('auth-token') === null){
        return false;
    }else{
        return true;
    }
};