import { IconChevronDown } from "@tabler/icons-react";
import scss from "./PhonesDropdown.module.scss"
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Новинки',
  },
  {
    key: '2',
    label: 'По акции',
    children: [
      {
        key: "2-1",
        label: "Все акции"
      },
      {
        key: "2-2",
        label: "До 50%"
      },
      {
        key: "2-3",
        label: "Свыше 50%"
      }
    ]
  },
  {
    key: '3',
    label: 'Рекомендуемые',
  },
  {
    key: '4',
    label: 'По увеличению цены',
  },
  {
    key: '5',
    label: 'По уменьшению цены',
  },

];

const PhonesDropdown = () => {

  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <div className={scss.sortDiv}>
            <p>Сортировать</p>
            <IconChevronDown />
          </div>
        </Space>
      </a>
    </Dropdown>
  )
}

export default PhonesDropdown