

const axios = require("axios");
const { saveTransaction} = require("../mongoose/database");


//middleware
const createToken = async (req, res, next) => {
  const secret = process.env.MPESA_CONSUMER_SECRET;
  const consumer = process.env.MPESA_CONSUMER_KEY;
  const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");
  const url_dev = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  await axios
    .get(
      url_dev,
      {
        headers: {
          authorization: `Basic ${auth}`,
        },
      }
    )
    .then((data) => {
      token = data.data.access_token;
      next();
    })
    .catch((err) => {
      res.status(400).json("TOKEN GENERETION ERROR: " + err.message);
    });
};

//stk push
const postStk = async (req, res) => {
  const phone = req.body.phone.substring(1);
  const amount = req.body.amount;
  console.log(req.body)
  const shortCode = process.env.MPESA_SHORTCODE;
  const passkey = process.env.MPESA_PASSKEY;

  const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
  const password = new Buffer.from(shortCode + passkey + timestamp).toString(
    "base64"
  );
  const data = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: `254${phone}`,
    PartyB: shortCode,
    PhoneNumber: `254${phone}`,
    CallBackURL: "https://mydomain.com/pat",
    AccountReference: "purchase",
    TransactionDesc: "purchase",
  };
 stk_dev = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  await axios
    .post(stk_dev, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((data) => {
      const dataArray = [];
      dataArray.push(data.data);
      if (data.data.ResponseCode == 0) {
        const transaction = {
          MerchantRequestID: data.data.MerchantRequestID,
          CheckoutRequestID: data.data.CheckoutRequestID,
          ResultCode: data.data.ResponseCode,
          ResultDesc: data.data.ResponseDescription,
        };
      } else {
        res.sendStatus(400);
      }
      res.status(200).json(data.data);
    })
    .catch((err) => {
      res.status(422).json("STK PUSH ERROR: " + err.message);
    });
};


//callback
const callback = async (req, res) => {
  const data = req.body.Body.stkCallback;
  const transaction = {
    MerchantRequestID: data.MerchantRequestID,
    CheckoutRequestID: data.CheckoutRequestID,
    ResultCode: data.ResultCode,
    ResultDesc: data.ResultDesc,
    Amount: data.CallbackMetadata?.Item[0].Value,
    MpesaReceiptNumber: data.CallbackMetadata?.Item[1].Value,
    Balance: data.CallbackMetadata?.Item[2].Value,
    TransactionDate: data.CallbackMetadata?.Item[3].Value,
    PhoneNumber: data.CallbackMetadata?.Item[4].Value,
  };
  await saveTransaction(transaction)
    .then((data) => {
      console.log("SAVED TRANSACTION", data);
      res.sendStatus(200);
    }
  )
    .catch((err) => {
      console.log(err);
      res.status(400).json("CALLBACK ERROR: " + err.message);
    });
};


module.exports = { createToken, postStk, callback};