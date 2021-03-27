import React from "react";
import styled from "styled-components";
import { colors } from "../../variables";
import PropTypes from "prop-types";
import EditIssue from "../templates/EditIssue";
import { getFormatedDate } from "../../utils";

const Wrapper = styled.div`
  overflow: scroll;
`;

const IssueTable = styled.table`
  border: 1px solid ${colors.border};
  border-radius: 6px;
  width: 100%;
`;

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background: rgba(198, 218, 230, 0.25);
  }

  /* 最後の行のtdにかかっているborder-bottomを削除しないと、table自体のborderとの間に変な隙間があるように見える */
  &:last-child > td {
    border-bottom: none;
  }

  th,
  td {
    padding: 0.5rem;
    text-align: left;
    min-width: 10rem;
    border-bottom: 1px solid ${colors.border};
  }
  th:first-child,
  td:first-child {
    min-width: auto;
  }
`;

const IssueContents = ({
  issueData,
  showModal,
  hideModal,
  updateIssue,
  checkedIssueIdList,
  setCheckedIssueIdList,
  isCheckedAllCheckbox,
  setIsCheckedAllCheckbox,
}) => {
  const allIdList = issueData?.map((item) => item.number);
  const onClickAllCheckbox = () => {
    setIsCheckedAllCheckbox((prevState) => {
      const newState = !prevState;
      // 変更したstate(全件checkboxのstate)を参考に別の処理を行う必要があったため、useStateのsetterにcallbackを渡し,
      // その中で処理を行うことで変更されたstateを使って同期的に処理を実行可能
      newState ? setCheckedIssueIdList(allIdList) : setCheckedIssueIdList([]);
      return newState;
    });
  };

  const onClickCheckbox = (e, number) => {
    e.stopPropagation();
    if (checkedIssueIdList.includes(number)) {
      // checkされていた場合
      setCheckedIssueIdList(
        checkedIssueIdList.filter((item) => item !== number)
      );
    } else {
      // checkされていなかった場合
      setCheckedIssueIdList([...checkedIssueIdList, number]);
    }
  };
  return (
    <Wrapper>
      <IssueTable>
        <thead>
          <TableRow>
            <th>
              <input
                type="checkbox"
                checked={isCheckedAllCheckbox}
                onClick={onClickAllCheckbox}
                readOnly
              />
            </th>
            <th></th>
            <th>ステータス</th>
            <th>作成者</th>
            <th>作成日付</th>
            <th>更新日付</th>
          </TableRow>
        </thead>
        <tbody>
          {issueData?.length ? (
            issueData.map((row) => {
              const createdAt = getFormatedDate(row.created_at);
              const updatedAt = getFormatedDate(row.updated_at);
              return (
                <TableRow
                  key={row.id}
                  onClick={() =>
                    showModal({
                      component: (
                        <EditIssue
                          issue={row}
                          hideModal={hideModal}
                          updateIssue={updateIssue}
                        />
                      ),
                    })
                  }
                >
                  <td>
                    <input
                      type="checkbox"
                      onClick={(e) => onClickCheckbox(e, row.number)}
                      checked={checkedIssueIdList.includes(row.number)}
                      readOnly
                    />
                  </td>
                  <td>
                    <a onClick={(e) => e.stopPropagation()} href={row.html_url}>
                      {row.title}
                    </a>
                  </td>
                  <td>{row.status}</td>
                  <td>{row.user.login}</td>
                  <td>{createdAt}</td>
                  <td>{updatedAt}</td>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <td>データがありません</td>
            </TableRow>
          )}
        </tbody>
      </IssueTable>
    </Wrapper>
  );
};

IssueContents.propTypes = {
  issueData: PropTypes.array,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
  updateIssue: PropTypes.func,
  checkedIssueIdList: PropTypes.array,
  setCheckedIssueIdList: PropTypes.func,
  isCheckedAllCheckbox: PropTypes.bool,
  setIsCheckedAllCheckbox: PropTypes.func,
};

export default IssueContents;
