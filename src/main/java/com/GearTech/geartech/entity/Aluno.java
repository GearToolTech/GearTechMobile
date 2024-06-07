package com.GearTech.geartech.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.Objects;

@Entity
@Table(name="aluno")
public class Aluno implements UserDetails {

	@Id
	@Column(length=8)
	private Long numMatricula;
	private String nome;
	private String email;
	private String turma;
	private String senha;

	public Aluno() {
	}

	public Aluno(Long numMatricula, String nome, String email, String turma, String senha) {
		this.numMatricula = numMatricula;
		this.nome = nome;
		this.email = email;
		this.turma = turma;
		this.senha = senha;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTurma() {
		return turma;
	}

	public void setTurma(String turma) {
		this.turma = turma;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	@Override
	public int hashCode() {
		return Objects.hash(email, nome, numMatricula, turma);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Aluno other = (Aluno) obj;
		return Objects.equals(email, other.email) && Objects.equals(nome, other.nome)
				&& numMatricula == other.numMatricula && Objects.equals(turma, other.turma);
	}

	@Override
	public String toString() {
		return "Aluno [numMatricula=" + numMatricula + ", nome=" + nome + ", email=" + email + ", turma=" + turma
				+ ", senha=" + senha + "]";
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
	}

	@Override
	public String getPassword() {
		return this.senha;
	}

	@Override
	public String getUsername() {
		return String.valueOf(this.numMatricula);
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
