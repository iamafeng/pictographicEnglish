"""
配置管理模块
"""
from dataclasses import dataclass
from typing import Optional


@dataclass
class Config:
    """配置类"""
    # AI服务配置
    ai_provider: str = "deepseek"  # "openai" | "claude" | "deepseek"
    api_key: str = ""
    base_url: str = "https://api.deepseek.com"
    model: str = "deepseek-chat"
    
    # 处理配置
    batch_size: int = 25
    max_retries: int = 3
    checkpoint_enabled: bool = True
    checkpoint_file: str = ".checkpoint.json"
    
    # 文件路径
    input_file: str = "words.js"
    output_file: str = "words.js"
    backup_file: str = "words.js.backup"
    log_file: str = "fix_words.log"
    
    @classmethod
    def from_args(cls, args):
        """从命令行参数创建配置"""
        config = cls()
        if hasattr(args, 'api_key') and args.api_key:
            config.api_key = args.api_key
        if hasattr(args, 'provider') and args.provider:
            config.ai_provider = args.provider
            # 根据provider设置base_url
            if args.provider == "openai":
                config.base_url = "https://api.openai.com/v1"
                config.model = "gpt-4"
            elif args.provider == "deepseek":
                config.base_url = "https://api.deepseek.com"
                config.model = "deepseek-chat"
            elif args.provider == "siliconflow":
                config.base_url = "https://api.siliconflow.cn/v1"
                config.model = "deepseek-ai/DeepSeek-V2.5"
        if hasattr(args, 'batch_size') and args.batch_size:
            config.batch_size = args.batch_size
        if hasattr(args, 'input_file') and args.input_file:
            config.input_file = args.input_file
        if hasattr(args, 'output_file') and args.output_file:
            config.output_file = args.output_file
        return config
