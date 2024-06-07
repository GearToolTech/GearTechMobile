package com.GearTech.geartech.dto;

public class ProfessorDTO {

    private Long nif;
    private String nome;

    public ProfessorDTO() {}

    public ProfessorDTO(Long nif, String nome) {
        this.nif = nif;
        this.nome = nome;
    }

    public Long getNif() {
        return nif;
    }

    public void setNif(Long numMatricula) {
        this.nif = nif;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
