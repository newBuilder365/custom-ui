import { Checkbox, Divider, Select, SelectProps } from 'antd';
import { DefaultOptionType, SelectValue } from 'antd/es/select';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface State {
  checked: boolean;
  value: SelectValue;
}

interface DownRenderProps {
  mode: string | undefined;
}

const DownRender = styled.div<DownRenderProps>`
  display: flex;
  display: ${(props) => (props.mode === 'multiple' ? 'flex' : 'none')};
  justify-content: space-between;
  padding: 0 10px;
`;

const DividerRender = styled.div<DownRenderProps>`
  display: ${(props) => (props.mode === 'multiple' ? 'flex' : 'none')};
`;

class CSelect extends React.PureComponent<SelectProps, State> {
  constructor(props: SelectProps) {
    super(props);
    this.state = {
      checked: false,
      value: props?.mode === 'multiple' ? [] : '',
    };
  }

  static getDerivedStateFromProps(nextProps: SelectProps, prevState: State) {
    const { value } = nextProps;
    // 当传入的type发生变化的时候，更新state
    if (value !== undefined && value !== prevState.value) {
      return {
        value,
      };
    }
    // 否则，对于state不进行任何操作
    return null;
  }

  // 获取所有的value值
  getAllValues = (checked: boolean) => {
    if (!checked)
      return {
        value: [],
        options: [],
      };
    const { options } = this.props;
    const selectData = options?.filter((v) => !v.disabled);
    return {
      value: selectData?.map((v) => v.value) as SelectValue,
      options: selectData as DefaultOptionType | Array<DefaultOptionType>,
    };
  };

  // 全选切换
  handleCheckChange = (e: any) => {
    const { onChange } = this.props;
    const checked = e.target.checked;
    const { value, options } = this.getAllValues(checked);
    if (typeof onChange === 'function')
      return this.setState({ checked }, () => {
        onChange(value, options);
      });
    this.setState({ checked, value });
  };

  // 组件内部的change事件
  handleChange = (
    value: any,
    option: DefaultOptionType | Array<DefaultOptionType>,
  ) => {
    const { onChange, options = [], mode } = this.props;
    let checked = false;
    if (mode === 'multiple') {
      checked = options.filter((v) => !v.disabled).length === value.length;
    }
    if (typeof onChange === 'function')
      return this.setState({ checked }, () => {
        onChange(value, option);
      });
    this.setState({ value, checked });
  };

  // 重构下拉菜单，多选时自动添加全选
  handleDownRender: any = (originNode: ReactNode) => {
    const { options = [], mode } = this.props;
    const { checked, value } = this.state;
    const dividerStyle = {
      margin: '2px 0',
    };
    const newValue = value as any[];
    let indeterminate =
      newValue.length > 0 &&
      newValue.length < options.filter((v) => !v.disabled)?.length;
    return (
      <>
        {originNode}
        <DividerRender mode={mode}>
          <Divider style={dividerStyle} />
        </DividerRender>

        <DownRender mode={mode}>
          <label>全选</label>
          <Checkbox
            indeterminate={indeterminate}
            checked={checked}
            onChange={this.handleCheckChange}
          />
        </DownRender>
      </>
    );
  };

  render() {
    const { value } = this.state;
    return (
      <Select
        dropdownRender={this.handleDownRender}
        {...this.props}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

export default CSelect;
