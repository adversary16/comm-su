import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import styles from './MailForm.module.scss';
const MailForm = ({className}) => {
  const {t} = useTranslation('mailer');
  return <div className={classNames(className, styles.root)}><form>
    <span className={styles.header}>Напишите нам</span>
    <input
      name="name"
      placeholder={t('name')}
    />
    <input name="company"
      placeholder={t('company')}
    />
    <input name="email"
      placeholder={t('email')}
    />
    <input name="phone"
      placeholder={t('phone')}
    />
    <input name="query"
      placeholder={t('query')}
    />
    <label>
      <input name="allowpersonal" type="checkbox"/>
      {t('allowpersonal')}
    </label>
  </form>
  <button>{t('submit')}</button>
  </div>;
};
export default MailForm;
