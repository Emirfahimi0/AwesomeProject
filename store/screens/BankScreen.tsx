import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, State } from "../../store";
import { BankruptBank, DepositBank, WithdrawalBank } from "../actions/BankAction";

const BankScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  //   const {
  //     DepositBank: DepositAction,
  //     WithdrawalBank: WithdrawalAction,
  //     BankruptBank: BankruptAction,
  //   } = bindActionCreators(Actions, dispatch);
  const amountState = useSelector((state: State) => state.bank);

  return (
    <View>
      <Button onPress={() => dispatch(DepositBank(1000))} title="Deposit" />
      <Button onPress={() => dispatch(WithdrawalBank(200))} title="WithDrawal" />
      <Button onPress={() => dispatch(BankruptBank())} title="Bankrupt" />
      <View style={styles.form}>
        <Text style={styles.txt_input}>{amountState}</Text>
      </View>
    </View>
  );
};

export default BankScreen;

const styles = StyleSheet.create({
  txt_input: {
    fontSize: 18,
    fontWeight: "600",
    textAlignVertical: "center",
  },
  form: {
    justifyContent: "center",
    backgroundColor: "red",
    alignContent: "space-between",
  },
});
