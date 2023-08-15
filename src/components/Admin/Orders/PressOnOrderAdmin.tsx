import PropTypes from 'prop-types';
import PressOnOrder from "../../../models/PressOnOrder";

interface PressOnOrderAdminProps {
    pressOnOrder: PressOnOrder;
  }

function PressOnOrderAdmin (props:PressOnOrderAdminProps) {
    return(
        <div>
            <div>
                <h1>Order: #{props.pressOnOrder.id}</h1>
                <p>
                    <span>Size: </span>{props.pressOnOrder.size}
                </p>
                <p>
                    <span>Length: </span>{props.pressOnOrder.lengths}
                </p>
                <p>
                    <span>Shape: </span>{props.pressOnOrder.shape}
                </p>
                <p>
                    <span>Charms: </span>{props.pressOnOrder.charms}
                </p>
                <p>
                    <span>Design: </span>{props.pressOnOrder.design}
                </p>
            </div>
        </div>
    )
}

PressOnOrderAdmin.proptypes = {
    pressOnOrder: PropTypes.object
}

export default PressOnOrderAdmin;