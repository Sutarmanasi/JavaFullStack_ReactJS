package com.abridged.stock_management_system.dto;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

/**
 * This is InvestorResponse Class
 * 
 * @author Manasi Sutar
 */
@Data
public class InvestorResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private int statusCode;
	private String message;
	private String investorIdMessage;
	private String investorNameMessage;
	private String emailMessage;
	private String passwordMessage;
	private String mobileNoMessage;
	private String balanceMessage;
	private List<Investor> investorList;
	private Investor investor;
	private Stock stock;
	private List<Stock> stockList;
}
