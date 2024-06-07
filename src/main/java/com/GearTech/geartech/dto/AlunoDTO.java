package com.GearTech.geartech.dto;

public class AlunoDTO {
    private Long numMatricula;
    private String nome;

    public AlunoDTO() {}

    public AlunoDTO(Long numMatricula, String nome) {
        this.numMatricula = numMatricula;
        this.nome = nome;
    }

    public Long getNumMatricula() {
        return numMatricula;
    }

    public void setNumMatricula(Long numMatricula) {
        this.numMatricula = numMatricula;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}

