package com.demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.beans.Complex;
import com.demo.dao.ComplexDao;

@Service
public class ComplexServiceImpl implements ComplexService {

    @Autowired
    private ComplexDao complexRepository;

    @Override
    public List<Complex> findAll() {
        return complexRepository.findAll();
    }

    @Override
    public Complex findById(int id) {
        Optional<Complex> complex = complexRepository.findById(id);
        return complex.orElse(null);
    }

    @Override
    public Complex save(Complex complex) {
        return complexRepository.save(complex);
    }

    @Override
    public void deleteById(int id) {
        complexRepository.deleteById(id);
    }
    
    @Override
    public Optional<Complex> getComplexByUsername(String username) {
        return complexRepository.findByComplexUsername(username);
    }
    
//    @Override
//    public Complex getComplexByName(String name) {
//        return complexRepository.findByComplexName(name);
//    }
}
