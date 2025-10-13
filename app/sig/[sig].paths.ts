import https from 'https';

// Helper function to make HTTPS requests
function makeRequest(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

export default {
  async paths() {
    try {
      const sigs = await makeRequest(
        'https://dsapi.osinfra.cn/query/sig/info?community=openeuler&search=fuzzy'
      );
      return sigs?.data?.map((sig: any) => {
        return {
          params: {
            sig: `${sig.sig_name}`,
          },
        };
      }) || [];
    } catch (error) {
      console.error('Failed to fetch SIG data:', error);
      return [];
    }
  },
};
