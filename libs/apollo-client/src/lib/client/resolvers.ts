import {
  UserSession,
  AppConfig
} from 'blockstack';

export const resolvers = {
  Query: {
    me: (root, _args, context) =>{
      const appConfig = new AppConfig();
      const userSession = new UserSession({appConfig: appConfig});
      if(userSession.isUserSignedIn()) {
        const data = userSession.loadUserData();
        return { id: data.username, username: data.username };
      }
      return null;
    }
  },
  Mutation: {
    createLobby: (root, _args, info) => null,//Lobby
    joinLobby: (root, _args, info) => null, //Lobby
    createPostItCard: (root, args, info) => null //PostItCard
  }

};

export default resolvers;
