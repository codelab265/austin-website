import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import countryList from "react-select-country-list";

function InviteForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [phone, setPhone] = useState("");
    const countries = countryList().getData();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const customStyles = {
        control: (base) => ({
            ...base,
            background: "transparent",
            border: "none",
            borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "0",
            boxShadow: "none",
            color: "white",
            paddingLeft: "0",
            minHeight: "42px",
            "&:hover": {
                borderColor: "rgba(255, 255, 255, 0.5)",
            },
        }),
        input: (base) => ({
            ...base,
            color: "white",
            margin: "0",
            padding: "0",
        }),
        singleValue: (base) => ({
            ...base,
            color: "white",
            margin: "0",
            padding: "0",
        }),
        valueContainer: (base) => ({
            ...base,
            padding: "0",
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? "#EA413C" : "transparent",
            color: state.isSelected ? "white" : "#333",
            "&:hover": {
                backgroundColor: "#f0f0f0",
            },
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: "white",
            zIndex: 50,
        }),
        indicatorSeparator: () => ({
            display: "none",
        }),
        dropdownIndicator: (base) => ({
            ...base,
            padding: "0",
        }),
    };

    const onSubmit = (data) => {
        // Here you would typically send the data to your backend
        console.log({ ...data, phone, startDate });
        toast.success("Invite sent successfully!");
        reset();
        setPhone("");
        setStartDate(new Date());
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-6"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative"
                >
                    <input
                        type="text"
                        placeholder="Full Name"
                        {...register("fullName", { required: true })}
                        className="w-full bg-transparent border-0 border-b border-[#D8D8D8] pb-2 text-white font-aeonik text-[18px] leading-[24px] tracking-[0%] placeholder:text-[#D8D8D8] focus:outline-none focus:border-white/50"
                    />
                    {errors.fullName && (
                        <span className="text-[#EA413C] text-sm absolute -bottom-6 left-0">
                            Full name is required
                        </span>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="relative"
                >
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                        })}
                        className="w-full bg-transparent border-0 border-b border-[#D8D8D8] pb-2 text-white font-aeonik text-[18px] leading-[24px] tracking-[0%] placeholder:text-[#D8D8D8] focus:outline-none focus:border-white/50"
                    />
                    {errors.email && (
                        <span className="text-[#EA413C] text-sm absolute -bottom-6 left-0">
                            Valid email is required
                        </span>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="relative [&>div]:border-0 [&>div]:border-b [&>div]:border-[#D8D8D8] [&>div]:rounded-none [&>div]:bg-transparent [&_.special-label]:hidden [&_.selected-flag]:bg-transparent [&_.selected-flag]:border-0 [&_.flag-dropdown]:border-0 [&_.country-list]:bg-white [&_.country-list]:text-black"
                >
                    <PhoneInput
                        country={"us"}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        inputStyle={{
                            width: "100%",
                            background: "transparent",
                            border: "none",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "0",
                            color: "white",
                            height: "42px",
                        }}
                        buttonStyle={{
                            background: "transparent",
                            border: "none",
                            borderRadius: "0",
                        }}
                        dropdownStyle={{
                            background: "white",
                            color: "black",
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="relative"
                >
                    <input
                        type="text"
                        placeholder="Church/Ministry Name"
                        {...register("churchName", { required: true })}
                        className="w-full bg-transparent border-0 border-b border-[#D8D8D8] pb-2 text-white font-aeonik text-[18px] leading-[24px] tracking-[0%] placeholder:text-[#D8D8D8] focus:outline-none focus:border-white/50"
                    />
                    {errors.churchName && (
                        <span className="text-[#EA413C] text-sm absolute -bottom-6 left-0">
                            Church/Ministry name is required
                        </span>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="relative"
                >
                    <Select
                        options={countries}
                        styles={customStyles}
                        placeholder="Select Country"
                        className="[&>div]:border-0 [&>div]:border-b [&>div]:border-[#D8D8D8] [&>div]:rounded-none [&>div]:text-[#D8D8D8] [&>div]:font-aeonik [&>div]:text-[18px] [&>div]:leading-[24px] [&>div]:tracking-[0%]"
                        {...register("country", { required: true })}
                    />
                    {errors.country && (
                        <span className="text-[#EA413C] text-sm absolute -bottom-6 left-0">
                            Country is required
                        </span>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="relative"
                >
                    <input
                        type="text"
                        placeholder="City"
                        {...register("city", { required: true })}
                        className="w-full bg-transparent border-0 border-b border-[#D8D8D8] pb-2 text-white font-aeonik text-[18px] leading-[24px] tracking-[0%] placeholder:text-[#D8D8D8] focus:outline-none focus:border-white/50"
                    />
                    {errors.city && (
                        <span className="text-[#EA413C] text-sm absolute -bottom-6 left-0">
                            City is required
                        </span>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="relative w-full"
                >
                    <input
                        type="date"
                        value={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="w-full bg-transparent border-0 border-b border-[#D8D8D8] pb-2 text-white font-aeonik text-[18px] leading-[24px] tracking-[0%] placeholder:text-[#D8D8D8] focus:outline-none focus:border-white/50 "
                        placeholderText="Event Date"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="relative"
                >
                    <input
                        type="text"
                        placeholder="Event Theme and Purpose"
                        {...register("eventTheme", { required: true })}
                        className="w-full bg-transparent border-0 border-b border-[#D8D8D8] pb-2 text-white font-aeonik text-[18px] leading-[24px] tracking-[0%] placeholder:text-[#D8D8D8] focus:outline-none focus:border-white/50"
                    />
                    {errors.eventTheme && (
                        <span className="text-[#EA413C] text-sm absolute -bottom-6 left-0">
                            Event theme is required
                        </span>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    className="relative"
                >
                    <textarea
                        placeholder="Message"
                        {...register("message")}
                        className="w-full bg-transparent border-0 border-b border-[#D8D8D8] pb-2 text-white font-aeonik text-[18px] leading-[24px] tracking-[0%] placeholder:text-[#D8D8D8] focus:outline-none focus:border-white/50 min-h-[100px] resize-none"
                    />
                </motion.div>

                <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#EA413C] text-white py-[18px] rounded-sm mt-8 font-medium text-[27px] leading-[30px] -tracking-[2%]  hover:bg-[#d63a35] transition-colors"
                >
                    SEND INVITE TO ME
                </motion.button>
            </form>
        </motion.div>
    );
}

export default InviteForm;
