package com.abridged.stock_management_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.MediaType;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abridged.stock_management_system.dto.Investor;
import com.abridged.stock_management_system.dto.InvestorResponse;
import com.abridged.stock_management_system.dto.Stock;
import com.abridged.stock_management_system.dto.LoginResponse;
import com.abridged.stock_management_system.exception.InvestorIdFoundException;
import com.abridged.stock_management_system.exception.StockIdFoundException;
import com.abridged.stock_management_system.service.InvestorService;
import com.abridged.stock_management_system.service.StockService;

/**
 * This is InvestorController Class
 * 
 * @author Manasi Sutar
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class InvestorController {

	@Autowired
	private InvestorService investorService;
	@Autowired
	private StockService stockService;

	/**
	 * This method is used to call investorLogin method
	 * 
	 * @param inverstorId {@code String}, password {@code String}
	 * @return response {@code Object}
	 */
	@GetMapping(path = "/investorLogin", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public LoginResponse investorLogin(String investorId,String password) {
		LoginResponse response = new LoginResponse();
		Investor info = investorService.investorLogin(investorId, password, response);
		if (info!=null) {
			response.setStatusCode(200);
			response.setMessage("Success");
			response.setMessage("Login Successful");
			response.setInvestor(info);
		} else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setMessage("Login Failed ! \n Please Check Username or Password");
		}
		return response;
	}

	/**
	 * This method is used to call forgot password method
	 * 
	 * @param info {@code Object}
	 * @return response {@code Object}
	 */
	@PutMapping(path = "/investorForgotPassword", consumes = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public LoginResponse investorForgotPassword(@RequestBody Investor info) {
		LoginResponse response = new LoginResponse();
		String investorId = info.getInvestorId();
		String password = info.getPassword();
		String mobileNo = info.getMobileNo();
		boolean isPasswordChange = investorService.investorForgotPassword(investorId, password, mobileNo, response);
		if (isPasswordChange) {
			response.setStatusCode(200);
			response.setMessage("Success");
			response.setMessage("Password Change Successful");
		} else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setMessage("Failed to Set Password!");
		}
		return response;
	}

	/**
	 * This method is used to add investor details
	 * 
	 * @param info {@code Object}
	 * @return response {@code Object}
	 */

	@PostMapping(path = "/addInvestor", consumes = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public InvestorResponse addInvestorDetails(@RequestBody Investor info) {
		InvestorResponse response = new InvestorResponse();
		String investorId = info.getInvestorId();
		boolean investorIdPresent = false;
		investorIdPresent = investorService.checkInvestorID(investorId);
		if (investorIdPresent)
			throw new InvestorIdFoundException();
		else {
			boolean isAdded = investorService.addInvestor(info, response);
			if (isAdded) {
				response.setStatusCode(200);
				response.setMessage("Success");
				response.setMessage("Investor Details Added Successfully");
			} else {
				response.setStatusCode(401);
				response.setMessage("Failure");
				response.setInvestorIdMessage(response.getInvestorIdMessage());
				response.setInvestorNameMessage(response.getInvestorNameMessage());
				response.setEmailMessage(response.getEmailMessage());
				response.setPasswordMessage(response.getPasswordMessage());
				response.setMobileNoMessage(response.getMobileNoMessage());
				response.setBalanceMessage(response.getBalanceMessage());
			}
		}
		return response;
	}

	/**
	 * This method is used to get investor details
	 * 
	 * @param investorId {@code String}
	 * @return response {@code Object}
	 */

	@GetMapping(path = "/getInvestor", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public InvestorResponse getInvestorDetails( String investorId, ModelMap map) {
		InvestorResponse response = new InvestorResponse();
		Investor info = investorService.getInvestorDetails(investorId, response);
		if (info != null) {
			response.setStatusCode(200);
			response.setMessage("Success");
			response.setMessage("Investor Details are present");
			response.setInvestor(info);
		} else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setMessage("Please Check Investor ID");
			response.setInvestorIdMessage(response.getInvestorIdMessage());
		}
		return response;
	}

	/**
	 * This method is used to update investor details
	 * 
	 * @param info {@code Object}
	 * @return response {@code Object}
	 */

	@PutMapping(path = "/updateInvestor", consumes = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public InvestorResponse updateInvestorInfo(@RequestBody Investor info) {
		InvestorResponse response = new InvestorResponse();
		boolean isUpdated = investorService.updateInvestor(info, response);
		if (isUpdated) {
			response.setStatusCode(200);
			response.setMessage("Success");
			response.setMessage("Investor Details Updated Successfully");
		} else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setMessage("Please Check Investor ID");
		}
		return response;
	}

	/**
	 * This method is used to buy stocks
	 * 
	 * @param stock {@code Object}
	 * @return response {@code Object}
	 */

	@PostMapping(path = "/buyStock", consumes = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public InvestorResponse buyStock(@RequestBody Stock stock) {
		InvestorResponse response = new InvestorResponse();
		int stockId = stock.getStockId();
		boolean stockIDPresent = false;
		stockIDPresent = stockService.checkStockID(stockId);
		if (stockIDPresent)
			throw new StockIdFoundException();
		else {
			boolean isAdded = stockService.buyStock(stock);
			if (isAdded) {
				response.setStatusCode(200);
				response.setMessage("Success");
				response.setMessage("Stock Bought Successfully");
			} else {
				response.setStatusCode(401);
				response.setMessage("Failure");
				response.setMessage("Failed to Buy");
			}
		}
		return response;
	}

	/**
	 * This method is used to sell stocks
	 * 
	 * @param stock {@code Object}
	 * @return response {@code Object}
	 */

	@PostMapping(path = "/sellStock", consumes = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public InvestorResponse sellStock(@RequestBody Stock stock) {
		InvestorResponse response = new InvestorResponse();
		int stockId = stock.getStockId();
		boolean stockIDPresent = false;
		stockIDPresent = stockService.checkStockID(stockId);
		if (stockIDPresent)
			throw new StockIdFoundException();
		else {
			boolean isAdded = stockService.sellStock(stock);
			if (isAdded) {
				response.setStatusCode(200);
				response.setMessage("Success");
				response.setMessage("Stock Sold successfully");
			} else {
				response.setStatusCode(401);
				response.setMessage("Failure");
				response.setMessage("Failed to Sold");
			}
		}
		return response;
	}

	/**
	 * This method is used to get investor stock details
	 * 
	 * @param investorId {@code String}
	 * @return response {@code Object}
	 */

	@GetMapping(path = "/getInvestorStockDetails/{investorId}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public InvestorResponse getInvestoStockDetails(@PathVariable(name = "investorId") String investorId, ModelMap map) {
		List<Stock> info = stockService.getInvestorStock(investorId);
		InvestorResponse response = new InvestorResponse();
		if (info != null) {
			response.setStatusCode(200);
			response.setMessage("Success");
			response.setMessage("Stock Details Are Present");
			response.setStockList(info);
		} else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setMessage("Stock Details Not Present");
		}
		return response;
	}

}
