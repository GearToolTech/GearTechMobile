package com.GearTech.geartech.entity;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="professor")
public class Professor {

	@Id
	private Long nif;
	private String nome;
	private String email;
	private String senha;
	
	public Professor() {
		
	}

	public Professor(Long nif, String nome, String email, String senha) {
		this.nif = nif;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
	}

	public Long getNif() {
		return nif;
	}

	public void setNif(Long nif) {
		this.nif = nif;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	@Override
	public int hashCode() {
		return Objects.hash(email, nif, nome, senha);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Professor other = (Professor) obj;
		return Objects.equals(email, other.email) && nif == other.nif && Objects.equals(nome, other.nome)
				&& Objects.equals(senha, other.senha);
	}

	@Override
	public String toString() {
		return "Professor [nif=" + nif + ", nome=" + nome + ", email=" + email + ", senha=" + senha + "]";
	}
	
	
}
