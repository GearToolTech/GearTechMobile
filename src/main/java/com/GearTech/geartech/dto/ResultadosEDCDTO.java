package com.GearTech.geartech.dto;

import com.GearTech.geartech.entity.Aluno;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class ResultadosEDCDTO {

    private Long id;
    public float circuloPrimitivo1;
    public float circuloPrimitivo2;
    public float anguloConeCabe1;
    public float anguloConeCabe2;
    public float anguloPrimitivo1;
    public float anguloPrimitivo2;
    public float anguloEixos;
    private AlunoDTO aluno;

    private ProfessorDTO professor;

    public ResultadosEDCDTO() {
    }

    public ResultadosEDCDTO(Long id, float circuloPrimitivo1, float circuloPrimitivo2, float anguloConeCabe1,
                         float anguloConeCabe2, float anguloPrimitivo1, float anguloPrimitivo2, float anguloEixos, AlunoDTO aluno) {
        this.id = id;
        this.circuloPrimitivo1 = circuloPrimitivo1;
        this.circuloPrimitivo2 = circuloPrimitivo2;
        this.anguloConeCabe1 = anguloConeCabe1;
        this.anguloConeCabe2 = anguloConeCabe2;
        this.anguloPrimitivo1 = anguloPrimitivo1;
        this.anguloPrimitivo2 = anguloPrimitivo2;
        this.anguloEixos = anguloEixos;
        this.aluno = aluno;
    }

    public ResultadosEDCDTO(Long id, float circuloPrimitivo1, float circuloPrimitivo2, float anguloConeCabe1,
                         float anguloConeCabe2, float anguloPrimitivo1, float anguloPrimitivo2, float anguloEixos, ProfessorDTO professor) {
        this.id = id;
        this.circuloPrimitivo1 = circuloPrimitivo1;
        this.circuloPrimitivo2 = circuloPrimitivo2;
        this.anguloConeCabe1 = anguloConeCabe1;
        this.anguloConeCabe2 = anguloConeCabe2;
        this.anguloPrimitivo1 = anguloPrimitivo1;
        this.anguloPrimitivo2 = anguloPrimitivo2;
        this.anguloEixos = anguloEixos;
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

    public float getAnguloConeCabe1() {
        return anguloConeCabe1;
    }

    public void setAnguloConeCabe1(float anguloConeCabe1) {
        this.anguloConeCabe1 = anguloConeCabe1;
    }

    public float getAnguloConeCabe2() {
        return anguloConeCabe2;
    }

    public void setAnguloConeCabe2(float anguloConeCabe2) {
        this.anguloConeCabe2 = anguloConeCabe2;
    }

    public float getAnguloPrimitivo1() {
        return anguloPrimitivo1;
    }

    public void setAnguloPrimitivo1(float anguloPrimitivo1) {
        this.anguloPrimitivo1 = anguloPrimitivo1;
    }

    public float getAnguloPrimitivo2() {
        return anguloPrimitivo2;
    }

    public void setAnguloPrimitivo2(float anguloPrimitivo2) {
        this.anguloPrimitivo2 = anguloPrimitivo2;
    }

    public float getAnguloEixos() {
        return anguloEixos;
    }

    public void setAnguloEixos(float anguloEixos) {
        this.anguloEixos = anguloEixos;
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
