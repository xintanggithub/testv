# core-bot
Demonstrate the core capabilities of the Microsoft Bot Framework

This bot has been created using [Bot Framework](https://dev.botframework.com), it shows how to:
- Use [LUIS](https://www.luis.ai) to implement core AI capabilities
- Implement a multi-turn conversation using Dialogs
- Handle user interruptions for such things as `Help` or `Cancel`
- Prompt for and validate requests for information from the user
- Demonstrate how to handle any unexpected errors


## Prerequisites
- [Node.js](https://nodejs.org) version 10.14 or higher
    ```bash
    # determine node version
    node --version
    ```
# To run the bot locally
- Download the bot code from the Build blade in the Azure Portal (make sure you click "Yes" when asked "Include app settings in the downloaded zip file?").
    - If you clicked "No" you will need to copy all the Application Settings properties from your App Service to your local .env file.
- Install modules
    ```bash
    npm install
    ```
- Run the bot
    ```bash
    npm start
    ```

# Testing the bot using Bot Framework Emulator
[Bot Framework Emulator](https://github.com/microsoft/botframework-emulator) is a desktop application that allows bot developers to test and debug their bots on localhost or running remotely through a tunnel.

- Install the Bot Framework Emulator version 4.8.0 or greater from [here](https://github.com/Microsoft/BotFramework-Emulator/releases)

## Connect to the bot using Bot Framework Emulator
- Launch Bot Framework Emulator
- File -> Open Bot
- Enter a Bot URL of `http://localhost:3978/api/messages`

# Deploy the bot to Azure
After creating the bot and testing it locally, you can deploy it to Azure to make it accessible from anywhere.
To learn how, see [Deploy your bot to Azure](https://aka.ms/azuredeployment) for a complete set of deployment instructions.

# Further reading

- [Bot Framework Documentation](https://docs.botframework.com)
- [Bot Basics](https://docs.microsoft.com/azure/bot-service/bot-builder-basics?view=azure-bot-service-4.0)
- [Dialogs](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-concept-dialog?view=azure-bot-service-4.0)
- [Gathering Input Using Prompts](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-prompts?view=azure-bot-service-4.0&tabs=javascript)
- [Activity processing](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-concept-activity-processing?view=azure-bot-service-4.0)
- [Azure Bot Service Introduction](https://docs.microsoft.com/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0)
- [Azure Bot Service Documentation](https://docs.microsoft.com/azure/bot-service/?view=azure-bot-service-4.0)
- [Azure CLI](https://docs.microsoft.com/cli/azure/?view=azure-cli-latest)
- [Azure Portal](https://portal.azure.com)
- [Language Understanding using LUIS](https://docs.microsoft.com/en-us/azure/cognitive-services/luis/)
- [Channels and Bot Connector Service](https://docs.microsoft.com/en-us/azure/bot-service/bot-concepts?view=azure-bot-service-4.0)
- [Restify](https://www.npmjs.com/package/restify)
- [dotenv](https://www.npmjs.com/package/dotenv)


```

{
    "acceptMappedClaims": null,
    "addIns": [],
    "allowGuestsSignIn": null,
    "allowPassthroughUsers": null,
    "appId": "111b872f-9941-4f1e-b9c0-daaaa2f8df26",
    "appLogoUrl": null,
    "appPermissions": null,
    "appRoles": [],
    "applicationTemplateId": null,
    "availableToOtherTenants": true,
    "deletionTimestamp": null,
    "displayName": "JDOXB",
    "errorUrl": null,
    "groupMembershipClaims": null,
    "homepage": null,
    "identifierUris": [],
    "informationalUrls": {
      "marketing": null,
      "privacy": null,
      "support": null,
      "termsOfService": null
    },
    "isDeviceOnlyAuthSupported": null,
    "keyCredentials": [],
    "knownClientApplications": [],
    "logo@odata.mediaContentType": "application/json;odata=minimalmetadata; charset=utf-8",
    "logo@odata.mediaEditLink": "directoryObjects/3d58037f-b13a-47a2-af13-387d6cd5a2c7/Microsoft.DirectoryServices.Application/logo",
    "logoUrl": null,
    "logoutUrl": null,
    "mainLogo@odata.mediaEditLink": "directoryObjects/3d58037f-b13a-47a2-af13-387d6cd5a2c7/Microsoft.DirectoryServices.Application/mainLogo",
    "oauth2AllowIdTokenImplicitFlow": true,
    "oauth2AllowImplicitFlow": false,
    "oauth2AllowUrlPathMatching": false,
    "oauth2Permissions": [
      {
        "adminConsentDescription": "Allow the application to access JDOXB on behalf of the signed-in user.",
        "adminConsentDisplayName": "Access JDOXB",
        "id": "e8a14dc0-6974-46a8-8110-c7478786aec4",
        "isEnabled": true,
        "type": "User",
        "userConsentDescription": "Allow the application to access JDOXB on your behalf.",
        "userConsentDisplayName": "Access JDOXB",
        "value": "user_impersonation"
      }
    ],
    "oauth2RequirePostResponse": false,
    "objectId": "3d58037f-b13a-47a2-af13-387d6cd5a2c7",
    "objectType": "Application",
    "odata.metadata": "https://graph.windows.net/71de47e8-7da8-48df-895b-e07edd1b0dbd/$metadata#directoryObjects/@Element",
    "odata.type": "Microsoft.DirectoryServices.Application",
    "optionalClaims": null,
    "orgRestrictions": [],
    "parentalControlSettings": {
      "countriesBlockedForMinors": [],
      "legalAgeGroupRule": "Allow"
    },
    "passwordCredentials": [
      {
        "additionalProperties": null,
        "customKeyIdentifier": null,
        "endDate": "2021-05-26T06:53:22.505045+00:00",
        "keyId": "fda27e45-d383-4d0d-ba12-3c9cb3d04649",
        "startDate": "2020-05-26T06:53:22.505045+00:00",
        "value": null
      }
    ],
    "preAuthorizedApplications": null,
    "publicClient": null,
    "publisherDomain": "renhong20121314outlook.onmicrosoft.com",
    "recordConsentConditions": null,
    "replyUrls": [],
    "requiredResourceAccess": [],
    "samlMetadataUrl": null,
    "signInAudience": "AzureADMultipleOrgs",
    "tokenEncryptionKeyId": null,
    "wwwHomepage": null
  }

az ad app create --display-name "JDOXB" --password "jidouauto123" --available-to-other-tenants

az deployment create --template-file "deploymentTemplates/template-with-new-rg.json" --location eastasia --parameters appId="111b872f-9941-4f1e-b9c0-daaaa2f8df26" appSecret="jidouauto123" botId="jdoxbid" botSku=F0 newAppServicePlanName="jidou-voice" newWebAppName="jdoxbwebname" groupName="jdo_voice_resource" groupLocation="eastus" newAppServicePlanLocation="eastus" --name "JDOXB"

az group deployment create --resource-group "jdo_voice_resource" --template-file "deploymentTemplates/template-with-preexisting-rg.json" --parameters appId="111b872f-9941-4f1e-b9c0-daaaa2f8df26" appSecret="jidouauto123" botId="jdoxbid" newWebAppName="jdoxbwebname" newAppServicePlanName="jidou-voice" appServicePlanLocation="eastus" --name "JDOXB"

az webapp deployment source config-zip --resource-group "jdo_voice_resource" --name "jdoxbwebname" --src JDOXB.zip


```