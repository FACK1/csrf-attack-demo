# CSRF Attack Demo
To see how csrf attack works.

## Required:
 - NodeJS (to run the server).

## Instructions:

1. Clone this repo.
2. You need two terminals, one opened on the `site-1`, and the other for `site-2` folders.
3. On each terminal, type `node server.js` to run the servers, Change the ports if it's used by other apps.
4. Go to the browser, run the site one using "localhost:5000".
5. See the site-2 terminal, you will see that "SOMEONE REQUESTED", but you didn't!

## How did that happen ?

On the site-1, see the <img> tag, it's src attribute makes the request to the site-2, without a permission from the user.
