import React, { useState,useEffect } from 'react'
import * as motion from "motion/react-client"
function Inputs({ currency }) {
    const [fromCurrency, setfromCurrency] = useState("1inch")
    const [toCurrency, settoCurrency] = useState("1inch")
    const [fromCurrencyValue, setfromCurrencyValue] = useState(1)
    const [toCurrencyValue, settoCurrencyValue] = useState(1)
    const [currencyApi, setcurrencyApi] = useState([])
    // console.log("From Currency:");
    // console.log(fromCurrency);

    
    useEffect(() => {
        let currency = fromCurrency
       fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
        .then((res)=>res.json())
        .then((data)=>setcurrencyApi([data]))
        console.log("Currency API:")
        console.log(currencyApi[0]);
        
        console.log(currency);
        console.log("Second");
        
        // settoCurrencyValue(currencyApi[0].ada.toCurrency)
    }, [fromCurrency])
    const handleCalculation = () => {
        if (fromCurrencyValue.toString().trim() === "" || toCurrencyValue.toString().trim() === "") {
            alert("Please enter any digit!")

            setfromCurrencyValue(1)

            settoCurrencyValue(1)

            return; // Stop further execution
        }
        if(fromCurrencyValue == "0" || toCurrencyValue =="0")
        {
            alert("Value can not be 0!")
            setfromCurrencyValue(1)

            settoCurrencyValue(1)
            return;
        }
        if (/[a-zA-Z]/.test(fromCurrencyValue.toString()) || /[a-zA-Z]/.test(toCurrencyValue.toString())) {
            alert("Only numbers are allowed!");

            setfromCurrencyValue(1)

            settoCurrencyValue(1)

            return; // Stop further execution
        }
        // alert("hi")
        let a = currencyApi[0]
        console.log(currencyApi[0]);
        console.log(a.date);
        console.log(a[fromCurrency]);
        
        settoCurrencyValue(currencyApi[0][fromCurrency][toCurrency]*fromCurrencyValue)
    }
    return (
        <motion.div id='first' className='flex w-full border-2 border-[#ffc393]  backdrop-blur-sm py-10  min-h-[50vh] rounded-md   gap-8 flex-wrap items-center justify-center' initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01],
            }}>
            {/* From & Currency Details */}
            <div id='first_1' className='flex w-[100%] flex-col justify-center items-center gap-4 flex-wrap '>
                {/* From Input Details */}
                <div className='from_data flex gap-2 flex-col'>
                    <label htmlFor="from" className='font-bold text-[#4a4131]'>From:</label>
                    <motion.select name='from' onChange={(e) => setfromCurrency(e.target.value)} className='px-4 py-2 border rounded-sm border-orange-300 shadow-orange-400 shadow-md outline-none' whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 }
                    }}>
                        {Object.entries(currency).map(([code, name]) => {
                            return <option key={code} className='px-2' >{code}</option>
                        })}

                    </motion.select>
                </div>
                {/* From Currency Details */}
                <div className='from_input w-full flex items-center justify-center'>
                    <motion.input value={fromCurrencyValue} onChange={(e) => setfromCurrencyValue(e.target.value)}
                        whileHover={{ scale: 1.1 }} whileFocus={{ scale: 1.1 }} initial={{ scale: 1.0 }} transition={{ duration: 1.0, ease: [0, 0.71, 0.2, 1.01], type: "spring" }} placeholder='Enter the Currency Amount' className='py-2 px-4 rounded-sm shadow-md shadow-orange-300 border-2 border-orange-400 outline-none w-[38%]' type='text' />
                </div>
            </div>
            <div id='first_2' className='flex w-[100%] flex-col justify-center items-center gap-4 flex-wrap '>
                {/* From Input Details */}
                <div className='from_data flex gap-2 flex-col'>
                    <label htmlFor="from" className='font-bold text-[#4a4131]'>To:</label>
                    <motion.select name='from' onChange={(e) => settoCurrency(e.target.value)} className='px-4 py-2 border rounded-sm border-orange-400 shadow-orange-400 shadow-md outline-none' whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 }
                    }}>
                        {Object.entries(currency).map(([code, name]) => {
                            return <option key={code} className='px-2' >{code}</option>
                        })}

                    </motion.select>
                </div>
                {/* From Currency Details */}
                <div className='from_input w-full flex items-center justify-center'>
                    <motion.input value={toCurrencyValue} onChange={(e) => settoCurrencyValue(e.target.value)}
                        whileHover={{ scale: 1.1 }} whileFocus={{ scale: 1.1 }} initial={{ scale: 1.0 }} transition={{ duration: 1.0, type: "spring" }} placeholder='Enter the Currency Amount' className='py-2 px-4 rounded-sm shadow-md shadow-orange-300 border-2 border-orange-400 outline-none w-[38%]' type='text' />
                </div>
            </div>

            {/* Calculate Button */}
            <motion.button onClick={()=>{handleCalculation()}} whileHover={{ scale: 1.1, rotate: 5 }} initial={{ scale: 1.0 }} transition={{ type: "spring", duration: 1.0 }} className='bg-slate-800 text-white px-6 py-2 rounded-sm font-bold shadow-md shadow-slate-800'>Calculate</motion.button>

        </motion.div>
    )
}

export default Inputs
