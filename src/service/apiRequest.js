import axios from "axios";

const username = process.env.REACT_APP_USERNAME;
const token = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
const repo = process.env.REACT_APP_GITHUB_REPO;

// axiosインスタンスを作成することで毎回引数に設定情報を渡さなくて良くなる
const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  auth: {
    username,
    password: token,
  },
});

export const fetchIssueData = async (passedParams) => {
  const timestamp = new Date().getTime();
  let response = await axiosInstance.get(`/repos/${username}/${repo}/issues`, {
    params: {
      ...passedParams.payload,
      timestamp,
    },
  });

  if (typeof response === "string") {
    throw new Error("一覧の取得に失敗しました");
  }
  return response.data;
};

export const createIssue = async (data) => {
  try {
    const response = await axiosInstance.post(
      `/repos/${username}/${repo}/issues`,
      data
    );
    return response.data;
  } catch (e) {
    throw new Error("作成に失敗しました");
  }
};

export const updateIssue = async ({ data, issueNumber }) => {
  try {
    const response = await axiosInstance.patch(
      `/repos/${username}/${repo}/issues/${issueNumber}`,
      data
    );
    return response.data;
  } catch (error) {
    throw new Error("更新に失敗しました");
  }
};

export const fetchUser = async () => {
  try {
    const response = await axiosInstance.get("/user");
    return response.data;
  } catch (error) {
    throw new Error("ユーザー情報の取得に失敗しました");
  }
};
