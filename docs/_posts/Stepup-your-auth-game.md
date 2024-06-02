---
layout: post
title: "Step up your auth game"
date: 2024-03-30
categories: ngconf
---

# Step up your authentication game

> Author: Alisa Duncan
> @alisaDuncan

**repo:** `https://github.com/alisaduncan/angular-stepup-auth`

use **completed** branch to see what she did.

- using okta
- new spec oauth2.0 step up authentication challenge
  - elevate auth factos
  - enforce recent auth
- Using guard to make a step up guard
- oauth2.0 and openid connect

  - uses JWT

    - claim pairs
    - ACR claim - defines business rules to be assured the users identity
    - when checking for steup will look to see if the ACR level is correct.
      - if not require step up
    - ACR support standard values and custom
      - standard
        - phr and phrh
      - mutli factor any 2 factor examples
      - acr the claim
      - acr_values -> requeted auth level
      - acr_values_supported -> which ones teh OIDC supports

  - using in route guard

    - check has claim and level is met
    - if not then do stepup login

  - Protecting resources

    - some apis may require step up auths (ACR values)
    - api will return with error
    - WWW-Authenticate error.
    - error will be `insufficent_authentication_???`
    - also will include required acr values
    - angular app need to handle this process
      - using an interceptor to handle the 401 and the `insufficent_user_authentication`
      - if this occurs then redirect to step up and recall

  - what about recency?

    - replace `acr_values` with `max_age` property
    - in guard usin `auth_time` claim to calculate recency

  - have good authentication security
    - use mutlifactor
    - use phisising resistant factors
    - can play with okta config

  Learn more

  @alisaDuncan
