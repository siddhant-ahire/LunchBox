import React from 'react'
import { PricingTable} from 'react-pricing-table';
import './Price.css';
import PricingSlots from './PricingSlot';


const Price = () => {
    return (
        <div className="container">
            <PricingTable highlightColor='#28a745'>
                <PricingSlots />
            </PricingTable>
        </div>
    )
}

export default Price
