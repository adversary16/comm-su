import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import styles from './MailForm.module.scss';
const MailForm = ({className}) => {
  const {t} = useTranslation('mailer');
  return <div className={classNames(className, styles.root)}>
    <span className={styles.header}>{t('mailCaption')}</span>
    <form>
      <span>
        <input
          name="name"
          placeholder={t('name')}
        />
        <input name="company"
          placeholder={t('company')}
        />
      </span>
      <span>
        <input name="email"
          placeholder={t('email')}
        />
        <input name="phone"
          placeholder={t('phone')}
        />
      </span>
      <span>
        <input name="query"
          placeholder={t('query')}
        />
        {/* <label>
          <input name="allowpersonal" type="checkbox"/>
          {t('allowpersonal')}
        </label> */}
      </span>
      <button>{t('submit')}</button>
    </form>
  </div>;
};
export default MailForm;
