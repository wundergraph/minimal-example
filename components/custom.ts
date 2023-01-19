import { createWunderGraphNext } from "./generated/nextjs";

const getBaseURL = () => {
    if (process.env.GITPOD_WORKSPACE_URL){
        return process.env.GITPOD_WORKSPACE_URL.replace('https://','https://3000-') + '/wg/api'
    }
    return window.location.protocol + '//' + window.location.host + '/api/wg'
}

export const { client, withWunderGraph, useQuery, useMutation, useSubscription, useUser, useAuth, useFileUpload } =
createWunderGraphNext({
    ssr: true,
    baseURL: getBaseURL(),
});