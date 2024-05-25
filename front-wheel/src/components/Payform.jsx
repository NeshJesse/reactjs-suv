/*This is the mpesa payment form with only front-end code 
includedthe code that handles form submission is mpesapay.js.
make sure to include this front-end in the src/app.jsx to preview it too
*/

const PaySection = () => {
    return(
     <div name="payform" className="mt-10">
        <div id="response"></div>
        <form id="paymentForm" action="" method="post" className="flex flex-col px-6 py-4">
           <h3 className="text-xl sm:text-xl lg:text-4xl text-center my-10 lg:my-10">MPESA Payment Form</h3>
           <label for="phone">Phone Number:</label>
           <input className=" px-5 w-[24rem] border border-neutral-700 rounded-xl" type="text" id="phone" name="phone" placeholder="254" required/><br/><br/>
           <label for="amount">Amount To Pay is 1000:</label>
           
           <input className=" px-5 w-[24rem] border border-neutral-700 rounded-xl" type="number" id="amount" name="amount" min="1000" max="2000" placeholder="enter amount minimum is 500" required/><br/><br/>
           <p3 className="text-neutral-500 py-3">To avoid any errors please pay the exact amount specified</p3>
           <br/>
           <button  className="w-[32rem] bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md" 
           type="submit">Pay With Mpesa</button>
        </form>
        <p className=" text-3xl px-6 text-green-500 mb-2 ml-2">
         Already paid, access your new SUV here
         <br/>
         <a href="https://forms.gle/R21R4Hs25BSLQHQcA" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Access here</a>.
        </p>
        
     </div>

    

    )

}
export default PaySection;