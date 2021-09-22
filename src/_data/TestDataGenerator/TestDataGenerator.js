const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

const generateDataList = (dataCount) => {
  return [...Array(dataCount).keys()].map((index) => {
    const id = index + 1;

    return {ImageURL:'https://www.pokemon-card.com/assets/images/card_images/large/S7R/039783_P_REKKUUZAVMAX.jpg',
    RankOrCategory:id,
    PackName:'S7R',
    CardNum:'${id}/999',
    Rarity:'RRR',
    CardName:'レックウザVMAX',
    Price:12000,
    id,}
  });
};

export const getTestData = async (option={}) => {
  const {limit=3, offset, dataCount=100} = option;
  await sleep(1000);

  const rangeMin = offset;
  const rangeMax = Number(offset) + Number(limit);
  const userCount = dataCount;
  const userList = generateDataList(Number(dataCount)).filter((data) => {
    return rangeMin < data.id && rangeMax >= data.id;
  });

  return { userList, userCount };
};