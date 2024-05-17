import { Client } from 'react-native-appwrite';

export const config ={
    endpoint: 'htts://cloud.appwrite.io/v1',
    platform: 'com.aoura.react_native',
    projectId: '6646333a000728bf3a4c',
    databaseId: '66463649002a91cc1269',
    userCollectionId: '664636800037e86c688f',
    videoCollectionId: '664636d9000fde1664ac',
    storageId: '6646399300177995f48a'
}
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;