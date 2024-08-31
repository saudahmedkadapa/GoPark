package com.demo.beans;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "complex_subscription_payment")
public class ComplexSubscriptionPayment {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "complex_subscription_payment_id")
	    private int id;

	    @Column(name = "complex_id")
	    private Integer complexId;

	    @Column(name = "complex_subscription_payment_status")
	    private String status;

	    @Column(name = "complex_subscription_payment_date_time")
	    private Timestamp paymentDateTime;

	    @Column(name = "complex_subscription_payment_amount")
	    private Integer amount;

	    // Getters and Setters
	    public int getId() {
	        return id;
	    }

	    public void setId(int id) {
	        this.id = id;
	    }

	    public Integer getComplexId() {
	        return complexId;
	    }

	    public void setComplexId(Integer complexId) {
	        this.complexId = complexId;
	    }

	    public String getStatus() {
	        return status;
	    }

	    public void setStatus(String status) {
	        this.status = status;
	    }

	    public Timestamp getPaymentDateTime() {
	        return paymentDateTime;
	    }

	    public void setPaymentDateTime(Timestamp paymentDateTime) {
	        this.paymentDateTime = paymentDateTime;
	    }

	    public Integer getAmount() {
	        return amount;
	    }

	    public void setAmount(Integer amount) {
	        this.amount = amount;
	    }

		public ComplexSubscriptionPayment() {
			super();
		}

		public ComplexSubscriptionPayment(int id, Integer complexId, String status, Timestamp paymentDateTime,
				Integer amount) {
			super();
			this.id = id;
			this.complexId = complexId;
			this.status = status;
			this.paymentDateTime = paymentDateTime;
			this.amount = amount;
		}

		@Override
		public String toString() {
			return "ComplexSubscriptionPayment [id=" + id + ", complexId=" + complexId + ", status=" + status
					+ ", paymentDateTime=" + paymentDateTime + ", amount=" + amount + "]";
		}
	    
	    
	}


