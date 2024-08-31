package com.demo.service;

import java.util.List;
import java.util.Optional;

import com.demo.beans.Complex;

public interface ComplexService {
    List<Complex> findAll();
    Complex findById(int id);
    Complex save(Complex complex);
    void deleteById(int id);
    //Complex getComplexByName(String complexName);
    
    Optional<Complex> getComplexByUsername(String username);
}
