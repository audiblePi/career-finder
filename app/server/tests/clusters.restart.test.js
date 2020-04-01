var cluster_util = require ("../scripts/cluster_util.js");

describe('Restarting Clusters', () => {
    test('deleting all clusters and resetting', async (done) => {
        await cluster_util.removeAllClusters();
        await cluster_util.loadClusters();
        done();
    })
});
