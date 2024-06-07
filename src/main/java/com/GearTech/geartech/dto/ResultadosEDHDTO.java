package com.GearTech.geartech.dto;

import com.GearTech.geartech.entity.Aluno;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class ResultadosEDHDTO {

    private Long id;
    public float circuloPrimitivo1;
    public float circuloPrimitivo2;
    public float moduloNormal;
    public float passoNormal;
    public float passoHelicoidal;
    public float distanciaEntreEixos;
    private AlunoDTO aluno;

    private ProfessorDTO professor;

    public ResultadosEDHDTO() {
    }

    public ResultadosEDHDTO(Long id, float circuloPrimitivo1, float circuloPrimitivo2, float moduloNormal,
                         float passoNormal, float passoHelicoidal, float distanciaEntreEixos, AlunoDTO aluno) {
        this.id = id;
        this.circuloPrimitivo1 = circuloPrimitivo1;
        this.circuloPrimitivo2 = circuloPrimitivo2;
        this.moduloNormal = moduloNormal;
        this.passoNormal = passoNormal;
        this.passoHelicoidal = passoHelicoidal;
        this.distanciaEntreEixos = distanciaEntreEixos;
        this.aluno = aluno;
    }

    public ResultadosEDHDTO(Long id, float circuloPrimitivo1, float circuloPrimitivo2, float moduloNormal,
                         float passoNormal, float passoHelicoidal, float distanciaEntreEixos, ProfessorDTO professor) {
        this.id = id;
        this.circuloPrimitivo1 = circuloPrimitivo1;
        this.circuloPrimitivo2 = circuloPrimitivo2;
        this.moduloNormal = moduloNormal;
        this.passoNormal = passoNormal;
        this.passoHelicoidal = passoHelicoidal;
        this.distanciaEntreEixos = distanciaEntreEixos;
        this.professor = professor;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public float getCirculoPrimitivo1() {
        return circuloPrimitivo1;
    }

    public void setCirculoPrimitivo1(float circuloPrimitivo1) {
        this.circuloPrimitivo1 = circuloPrimitivo1;
    }

    public float getCirculoPrimitivo2() {
        return circuloPrimitivo2;
    }

    public void setCirculoPrimitivo2(float circuloPrimitivo2) {
        this.circuloPrimitivo2 = circuloPrimitivo2;
    }

    public float getModuloNormal() {
        return moduloNormal;
    }

    public void setModuloNormal(float moduloNormal) {
        this.moduloNormal = moduloNormal;
    }

    public float getPassoNormal() {
        return passoNormal;
    }

    public void setPassoNormal(float passoNormal) {
        this.passoNormal = passoNormal;
    }

    public float getPassoHelicoidal() {
        return passoHelicoidal;
    }

    public void setPassoHelicoidal(float passoHelicoidal) {
        this.passoHelicoidal = passoHelicoidal;
    }

    public float getDistanciaEntreEixos() {
        return distanciaEntreEixos;
    }

    public void setDistanciaEntreEixos(float distanciaEntreEixos) {
        this.distanciaEntreEixos = distanciaEntreEixos;
    }

    public AlunoDTO getAluno() {
        return aluno;
    }

    public void setAluno(AlunoDTO aluno) {
        this.aluno = aluno;
    }

    public ProfessorDTO getProfessor() {
        return professor;
    }

    public void setProfessor(ProfessorDTO professor) {
        this.professor = professor;
    }
}
