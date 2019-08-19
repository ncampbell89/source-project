import React, { Component } from 'react';
// Material UI
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
// Icons
import Icon from 'react-icons-kit';
import {clipboard} from 'react-icons-kit/ionicons/clipboard'
//PayPal
import { PayPalButton } from "react-paypal-button-v2";

export default class PayButton extends Component {
  constructor(props) {
    super(props);
    this.state={
      supported: {'BTC':['Bitcoin', '1E2fGPCKyaWkRgzhjE3AyRpXrhVNfxVWYg'], 'BCHAB':['Bitcoin Cash AB',''], 'ETH':['Ether',''], 'EOS':['EOS',''], 'DAI':['Dai',''], 'XTZ':['Tezos',''], 'PayPal':['PayPal',''], 'Klaytn':['Klaytn','']},
      currency: "BTC",
      copied: "copy",
      AMOUNT: 5.00,
    }
    this.handleLinkChange=this.handleLinkChange.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.copy=this.copy.bind(this)
    this.resetCopy=this.resetCopy.bind(this)
    this.resetCopy2=this.resetCopy2.bind(this)
  }

  handleLinkChange(e){
    this.setState({ currency: e.target.value});
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  copy(toCopy) {
    var inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = toCopy;
    inp.setSelectionRange(0,-1);
    document.execCommand('copy');
    inp.remove();
    this.setState({copied:"copied!"});
  }

  resetCopy() {
    window.setTimeout(this.resetCopy2, 200);
  }

  resetCopy2() {
    this.setState({copied:"copy"})
  }

  render() {
    return (
      <div className="PayButton">
        <FormControl className="PayForm TextWhite">
          <Select
            value={this.state.currency}
            onChange={this.handleLinkChange}
            className="PayForm"
            style={{color:"#FFF", fill:"#FFF", stroke: "#FFF"}}
          >

            <MenuItem value="BTC" className="PayCurrency"><Typography className="PayCurrency" variant="overline">Bitcoin</Typography></MenuItem>
            <MenuItem value="BCHAB" className="PayCurrency"><Typography className="PayCurrency" variant="overline">BCHAB</Typography></MenuItem>
            <MenuItem value="ETH" className="PayCurrency"><Typography className="PayCurrency" variant="overline">Ether</Typography></MenuItem>
            <MenuItem value="DAI" className="PayCurrency"><Typography className="PayCurrency" variant="overline">DAI</Typography></MenuItem>
            <MenuItem value="PAYPAL" className="PayCurrency"><Typography className="PayCurrency" variant="overline">PayPal</Typography></MenuItem>
          </Select>
        </FormControl>
          {this.state.currency==="BTC" && (
            <Typography variant="subtitle1" className="PayLabel">
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0 PayLabel" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>1E2fGPCKyaWkRgzhjE3AyRpXrhVNfxVWYg</pre>
            </Tooltip>
            </Typography>       )}

          {this.state.currency==="BCHAB" && (
            <Typography variant="subtitle1" className="PayLabel">
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0 PayLabel" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>Coming Soon</pre>
            </Tooltip>
            </Typography>      )}

          {this.state.currency==="ETH" && (
            <Typography variant="subtitle1" className="PayLabel">
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>Coming Soon</pre>
            </Tooltip>
            </Typography>
            )}

          {this.state.currency==="DAI" && (
            <Typography variant="subtitle1" className="PayLabel">
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>Coming Soon</pre>
            </Tooltip>
            </Typography>
            )}
            {this.state.currency==="PAYPAL" && (
                  <div className="PayPalDiv">
                  $
                      <InputBase
                      autoFocus={true}
                      className="Amount"
                      name="AMOUNT"
                      value={this.state.AMOUNT}
                      onChange={this.handleChange('AMOUNT')}
                      type="number"
                      defaultValue="Amount"
                      InputProps={{
                         startAdornment: <InputAdornment position="start">$</InputAdornment>,
                       }}
                      />
                      <div className="PayPalButton">
                      <PayPalButton

                       amount={this.state.AMOUNT}
                       style={{
                          layout:  'horizontal',
                          color:   'gold',
                          shape:   'pill',
                          label:   'paypal',
                          tagline: 'false'
                        }}
                       onSuccess={(details, data) => {
                         alert("Transaction completed by " + details.payer.name.given_name);

                         // OPTIONAL: Call your server to save the transaction
                         return fetch("/paypal-transaction-complete", {
                           method: "post",
                           body: JSON.stringify({
                             orderID: data.orderID
                           })
                         });
                       }}
                       options={{
                          clientId: "AYR9R7PL7bninpLEZ1lFcgykyZcYRvJlW003jGvl_f3iggY11sHQ3j8ttg5Lwt9tRZmjkRLLWKSOJaie"
                        }}
                     />
                     </div>

                   </div>
                  )}
          {this.state.currency!=="PAYPAL" && (
              <Button variant="contained" className="Pay"><Icon icon={clipboard} className="CopyIcon"/>Copy</Button>
            )}
      </div>
    )
  }
}
