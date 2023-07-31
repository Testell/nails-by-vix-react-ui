import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import PressOnOrder from "../../models/PressOnOrder"


function PressOnForm(){
    const initialState: PressOnOrder = new PressOnOrder(0, "", "", "", false, "");

    const { onChange, onChangeInput, onSubmit, values } = useForm(
        addToCart,
        initialState
    );

    async function addToCart(){

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>
                        Size:
                    <input
                    name='size'
                    id='size'
                    type='size'
                    placeholder=''
                    onChange={onChangeInput}
                    required
                    />
                    </label> 
                    <label>
                        Length:
                        <select name='size'
                                id='size'
                                value={values.length}
                                onChange={onChange}
                                required>
                            <option>
                            
                            </option>
                        </select>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default PressOnForm;