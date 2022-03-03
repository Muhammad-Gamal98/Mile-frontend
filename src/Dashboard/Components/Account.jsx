import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { getAccounts } from "../../store/actions/accountAction";
import { useEffect } from "react";

function Account() {
  const accountList = useSelector((state) => state.accountReducer.accounts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccounts());
  }, []);
  console.log(accountList);
  return (
    <>
      <DataTable value={accountList}>
        <Column field="projectName" header="Project Name"></Column>
        <Column field="createdAt" header="Sum"></Column>
      </DataTable>
    </>
  );
}

export default Account;
