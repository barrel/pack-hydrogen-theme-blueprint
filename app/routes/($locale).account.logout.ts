import {redirect} from '@shopify/remix-oxygen';
import type {
  ActionFunction,
  AppLoadContext,
  LoaderFunctionArgs,
  ActionFunctionArgs,
} from '@shopify/remix-oxygen';

import type {I18nLocale} from '~/lib/types';

export async function cusomterLogout(context: AppLoadContext) {
  const {session} = context;
  session.unset('customerAccessToken');

  // The only file to explicitly type cast i18n to pass typecheck
  return redirect(
    `${(context.storefront.i18n as I18nLocale).pathPrefix}/account/login`,
    {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    },
  );
}

export async function loader({context}: LoaderFunctionArgs) {
  return redirect(
    `${(context.storefront.i18n as I18nLocale).pathPrefix}/account/login`,
  );
}

export const action: ActionFunction = async ({context}: ActionFunctionArgs) => {
  return cusomterLogout(context);
};
