package com.abridged.stock_management_system.dto;

import java.io.Serializable;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;

/**
 * This is Investor Entity Class
 * 
 * @author Manasi Sutar
 */

@Data
@Entity
@Table(name = "investor")
@JsonRootName("Investor")
@JsonInclude(content = Include.NON_NULL)
public class Investor implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column
	private String investorId;

	@Column
	private String investorName;

	@Column
	private String email;

	@Column
	private String password;

	@Column
	private String mobileNo;

	@Column
	private String gender;

	@Column
	private String bankName;

	@Column
	private String branchName;

	@Column
	private long accountNo;

	@Column
	private String pancardNo;

	@Column
	private double balance;
}
