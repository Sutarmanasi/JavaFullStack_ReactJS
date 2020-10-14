package com.abridged.stock_management_system.dto;

import java.io.Serializable;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonRootName;

import lombok.Data;

/**
 * This is Stock Entity Class
 * 
 * @author Manasi Sutar
 */

@Data
@Entity
@Table(name = "stock")
@JsonRootName("Stock")
@JsonInclude(content = Include.NON_NULL)
public class Stock implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column
	private int stockId;

	@Column
	private String companyId;

	@Column
	private String investorId;

	@Column
	private String stockName;

	@Column
	private int quantity;

	@Column
	private String type;

	@Column
	private double avgPrice;

	@Column
	private int totalNoOfStocks;

	@Column
	private double profitLoss;

	@Column
	private String status;
}
