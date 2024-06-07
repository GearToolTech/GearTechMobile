package com.GearTech.geartech.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.GearTech.geartech.entity.ResultadosEDH;
import org.springframework.data.repository.query.Param;

public interface ResultadosEDHRepository extends JpaRepository<ResultadosEDH, Long> {
    @Query("SELECT r FROM ResultadosEDH r WHERE r.aluno.numMatricula = :numMatricula")
    List<ResultadosEDH> findByAlunoNumMatricula(@Param("numMatricula") String numMatricula);

    @Query("SELECT r FROM ResultadosEDH r WHERE r.professor.nif = :nif")
    List<ResultadosEDH> findByProfessorNif(@Param("nif") String nif);
}
