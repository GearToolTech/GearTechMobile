package com.GearTech.geartech.dto;

import com.GearTech.geartech.entity.Aluno;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class ResultadosTDTO {

    private Long id;
    private float iTotal;
    private float iIndividuais;
    private AlunoDTO aluno;

    private ProfessorDTO professor;

    public ResultadosTDTO() {
    }

    public ResultadosTDTO(Long id, float iTotal, float iIndividuais, AlunoDTO aluno) {
        super();
        this.id = id;
        this.iTotal = iTotal;
        this.iIndividuais = iIndividuais;
        this.aluno = aluno;
    }

    public ResultadosTDTO(Long id, float iTotal, float iIndividuais, ProfessorDTO professor) {
        super();
        this.id = id;
        this.iTotal = iTotal;
        this.iIndividuais = iIndividuais;
        this.professor = professor;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public float getiTotal() {
        return iTotal;
    }

    public void setiTotal(float iTotal) {
        this.iTotal = iTotal;
    }

    public float getiIndividuais() {
        return iIndividuais;
    }

    public void setiIndividuais(float iIndividuais) {
        this.iIndividuais = iIndividuais;
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
