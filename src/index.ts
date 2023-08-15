import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
});

rc.token = {
  access_token: process.env.RINGCENTRAL_ACCESS_TOKEN,
};

const main = async () => {
  // const ext = await rc.restapi().account().extension().get();
  // console.log(JSON.stringify(ext, null, 2));
  // const callLogs = await rc.restapi().account().extension().callLog().list({
  //   dateFrom: '2023-07-17T00:00:00.000Z',
  //   dateTo: '2023-07-19T23:59:00.000Z',
  // });
  // console.log(JSON.stringify(callLogs, null, 2));

  const r = await rc.get<Buffer>(
    'https://media.ringcentral.com/restapi/v1.0/account/317091031/recording/2193822690031/content',
  );
  console.log(r);
};

main();
