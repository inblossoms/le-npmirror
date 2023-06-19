// 某些情况下 需要用户配置数据结合项目的渲染

module.exports = async function (pn) {
  let repos = [];

  // 获取项目列表 [vue, react, ...]
  repos.push(await fetchRepoLi()); // 因为我们获取的并不是一个项目组 所以要多次请求获取不同的仓库
  repos.push(await fetchRepoLi());
  repos.push(await fetchRepoLi());

  repos = repos.map((r) => r.name);
  console.log(repos);
};

const fetchRepoLi = async () => {
  const { data } = await axios.get();

  return data;
};