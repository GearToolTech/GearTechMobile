package com.GearTech.geartech.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.GearTech.geartech.entity.ResultadosEDR;
import org.springframework.data.repository.query.Param;

public interface ResultadosEDRRepository extends JpaRepository<ResultadosEDR, Long> {
    @Query("SELECT r FROM ResultadosEDR r WHERE r.aluno.numMatricula = :numMatricula")
    List<ResultadosEDR> findByAlunoNumMatricula(@Param("numMatricula") String numMatricula);

    @Query("SELECT r FROM ResultadosEDR r WHERE r.professor.nif = :nif")
    List<ResultadosEDR> findByProfessorNif(@Param("nif") String nif);
}


