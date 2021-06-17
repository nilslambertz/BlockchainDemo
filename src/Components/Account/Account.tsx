import React from 'react';
import {account} from "../../Utils/Interfaces";
import "./Account.scss"
import "../UpperList/UpperList.scss"

interface AccountProps {
    account: account
}

class Account extends React.Component<AccountProps, {}> {
    render() {
        return <div className={"account listElement"}>
            <table className={"accountTable listTable"}>
                <tbody>
                    <tr>
                        <td className={"id"}>{this.props.account.id}</td>
                        <td className={"privateKey smallText"}>{this.props.account.privateKey}</td>
                        <td className={"address smallText"}>{this.props.account.address}</td>
                        <td className={"balance"}>{this.props.account.balance}</td>
                    </tr>
                    <tr className={"description"}>
                        <td>ID</td>
                        <td>Private Key</td>
                        <td>Address</td>
                        <td>Balance</td>
                    </tr>
                </tbody>
            </table>
        </div>;
    }
}

export default Account;