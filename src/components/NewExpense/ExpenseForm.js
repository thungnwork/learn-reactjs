import { Send } from "@mui/icons-material";
import { Box, Button, Container, TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function ExpenseForm(props) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [inputDate, setInputDate] = useState(new Date());

    const [isValidTitle, setIsValidTitle] = useState(true);
    const [isValidAmount, setIsValidAmount] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();

        if (title.trim().length === 0) {
            setIsValidTitle(false);
            return;
        }

        if (isNaN(amount.trim())) {
            setIsValidAmount(false);
            return;
        }

        var expenseData = {
            title: title,
            amount: amount,
            date: inputDate
        };
        props.onSaveExpense(expenseData);
        setTitle('');
        setAmount('');
        setIsValidTitle(true);
        setIsValidAmount(true);
        // setDate(new Date());
    }

    return (
        <Container sx={{width: '50%'}}>
            <form onSubmit={submitHandler}>
                <Stack spacing={2} pt={5}>
                    <TextField 
                        id="expense-form-title" 
                        label="Title" 
                        variant="outlined"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        error={!isValidTitle}
                        helperText={!isValidTitle ? "please input a valid title" : ""}
                    />
                    <TextField 
                        id="expense-form-amount" 
                        label="Amount"
                        variant="outlined"
                        // type="number"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        error={!isValidAmount}
                        helperText={!isValidTitle ? "please input a valid number" : ""}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/dd/yyyy"
                            value={inputDate}
                            onChange={(newValue) => setInputDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Stack>

                <Box pt={2} display='flex' justifyContent='center' alignItems='center'>
                    <Button 
                        type="submit"
                        variant="contained"
                        color="primary"
                        endIcon={<Send />}
                    >Add Expense</Button>
                </Box>
            </form>
        </Container>
        
    );
}

export default ExpenseForm;