import React from 'react'
import { PricingSlot, PricingDetail } from 'react-pricing-table';

const PricingSlots = () => {
    return (
        <>
             <PricingSlot buttonText='BOOK NOW' title='Trial' priceText='499/week'>
                    <PricingDetail> <b>2</b> chapati</PricingDetail>
                    <PricingDetail> <b>1</b> sabji</PricingDetail>
                    <PricingDetail> <b>Dal Rice</b> </PricingDetail>
                    <PricingDetail strikethrough> <b>Papad & Achar</b></PricingDetail>
                    <PricingDetail > <b>Home Delivery</b></PricingDetail>
                </PricingSlot>
                <PricingSlot buttonText='BOOK NOW' title='Trial' priceText='599/week'>
                    <PricingDetail> <b>3</b> chapati</PricingDetail>
                    <PricingDetail> <b>1</b> sabji</PricingDetail>
                    <PricingDetail> <b>Dal Rice</b> </PricingDetail>
                    <PricingDetail> <b>Papad & Achar</b></PricingDetail>
                    <PricingDetail > <b>Home Delivery</b></PricingDetail>
                </PricingSlot>
                <PricingSlot buttonText='Book Now' title='BASIC' priceText='2999/month'>
                    <PricingDetail> <b>2</b> chapati</PricingDetail>
                    <PricingDetail> <b>1</b> sabji</PricingDetail>
                    <PricingDetail> <b>Dal Rice</b> </PricingDetail>
                    <PricingDetail> <b>Papad & Achar</b></PricingDetail>
                    <PricingDetail strikethrough> <b>1 Day/week special</b></PricingDetail>
                    <PricingDetail> <b>Home Delivery</b></PricingDetail>
                </PricingSlot>
                <PricingSlot highlighted buttonText='BOOK NOW' title='BASIC' priceText='3499/month'>
                    <PricingDetail> <b>3</b> chapati</PricingDetail>
                    <PricingDetail> <b>1</b> sabji</PricingDetail>
                    <PricingDetail> <b>Dal Rice</b> </PricingDetail>
                    <PricingDetail> <b>Papad & Achar</b></PricingDetail>
                    <PricingDetail> <b>1 Day/week special</b></PricingDetail>
                    <PricingDetail> <b>Home Delivery</b></PricingDetail>
                </PricingSlot>
                <PricingSlot buttonText='BOOK NOW' title='BASIC' priceText='3999/month'>
                    <PricingDetail> <b>4</b> chapati</PricingDetail>
                    <PricingDetail> <b>2</b> sabji</PricingDetail>
                    <PricingDetail> <b>Dal Rice</b> </PricingDetail>
                    <PricingDetail> <b>Papad & Achar</b></PricingDetail>
                    <PricingDetail> <b>2 Day/week special</b></PricingDetail>
                    <PricingDetail> <b>Home Delivery</b></PricingDetail>
                </PricingSlot>
        </>
    )
}

export default PricingSlots
